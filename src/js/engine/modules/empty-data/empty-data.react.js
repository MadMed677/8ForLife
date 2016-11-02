import React                from 'react';
import { If, Then, Else }   from 'react-if';

import './empty-data.post.css';

/**
 * React Class EmptyData
 *
 * @class
 */
class EmptyData extends React.Component {
    static propTypes = {
        fetching: React.PropTypes.bool
    }

    static defaultProps = {
        fetching: false
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
                        <p>Нет данных</p>
                    }</Else>
                </If>
            </div>
        );
    }
}

export default EmptyData;
