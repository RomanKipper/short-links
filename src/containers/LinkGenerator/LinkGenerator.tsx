import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import State from '../../types/State';
import NavLink from '../../components/NavLink';

import './LinkGenerator.less';

interface Props {
    linkText: string;
    isShortLink: boolean;
    onChangeLink: (text: string) => void;
    onShortenLink: (longUrl: string) => void;
    onExit: () => void;
}

function manStateToProps(state: State) {
    return {
        linkText: state.linkText,
        isShortLink: state.isShortLink
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onChangeLink(text: string) {
            dispatch(actions.setLinkText(text));
        },
        onShortenLink(longUrl: string) {
            dispatch(actions.addLink(longUrl))
        },
        onExit() {
            dispatch(actions.setLinkText(''));
        }
    };
}

class LinkGenerator extends React.Component<Props> {
    render() {
        return (
            <div className="link-generator">
                <h1 className="link-generator__title">
                    Сервис коротких ссылок
                </h1>
                <form className="link-generator__form" onSubmit={this.onSubmitForm}>
                    <input className="link-generator__link-input"
                        type="text"
                        value={this.props.linkText}
                        placeholder="Вставьте ссылку"
                        onChange={this.onChangeLink}>
                    </input>
                    <button className="link-generator__submit-button"
                        type="submit">
                        Укоротить
                    </button>
                </form>
                <NavLink to="/links" className="link-generator__nav-link">
                    Смотреть все ссылки
                </NavLink>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.onExit();
    }

    onChangeLink = (event: React.FormEvent<HTMLInputElement>) => {
        this.props.onChangeLink(event.currentTarget.value);
    }

    onSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (this.props.isShortLink) {
            alert('Эта ссылка уже короткая');
        } else {
            this.props.onShortenLink(this.props.linkText);
        }
    }
}

export default connect(manStateToProps, mapDispatchToProps)(LinkGenerator);
