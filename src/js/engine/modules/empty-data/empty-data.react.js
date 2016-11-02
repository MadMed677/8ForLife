import React                from 'react';
import { If, Then, Else }   from 'react-if';

import './empty-data.post.css';

/**
 * React Presentational Component - EmptyData
 *
 * @param {Boolean} [fetching] - данные загружаются
 *
 * @class
 */
class EmptyData extends React.Component {
    static propTypes = {
        fetching: React.PropTypes.bool,
        text: React.PropTypes.string
    }

    static defaultProps = {
        fetching: false,
        text: 'Нет данных'
    };

    state = {}

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div className="empty-data">
                <If condition={ this.props.fetching }>
                    <Then>
                        <div className="spinner" />
                    </Then>
                    <Else>{() =>
                        <p>{ this.props.text }</p>
                    }</Else>
                </If>
            </div>
        );
    }
}

export default EmptyData;
