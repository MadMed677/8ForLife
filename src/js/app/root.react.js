import React                    from 'react';

/**
 * React Class Root. Самый базовый класс. Точка входа.
 *
 * @class
 */
class Root extends React.Component {
    static propTypes = {
        children: React.PropTypes.object
    };

    render() {
        return (
            <div className="page">
                { this.props.children }
            </div>
        );
    }
}

export default Root;
