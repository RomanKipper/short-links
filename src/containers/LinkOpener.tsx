import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';
import lodash from 'lodash';

import State from '../types/State';
import * as actions from '../actions';
import * as utils from '../utils';
import Page404 from '../components/Page404';

interface Props {
    match: match<RouteParams>;
    linkUrl?: string;
    onLinkOpened: (linkUrl: string) => void;
}

interface RouteParams {
    token: string;
}

function mapStateToProps(state: State, ownProps: Props) {
    const token = ownProps.match.params.token;
    const link = lodash.find(state.links, link => utils.shortLinkMatchesToken(link.shortUrl, token));
    return {
        linkUrl: link && link.longUrl
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLinkOpened(url: string) {
            dispatch(actions.trackLinkClick(url));
        }
    };
}

class LinkOpener extends React.Component<Props> {
    render() {
        return this.props.linkUrl ? null : <Page404 />;
    }

    componentDidMount() {
        if (this.props.linkUrl) {
            this.props.onLinkOpened(this.props.linkUrl);
            window.location.href = this.props.linkUrl;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkOpener);
