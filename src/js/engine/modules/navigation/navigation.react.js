import React            from 'react';
import _                from 'lodash';
import { Link }         from 'react-router';

import routes           from 'routes.js';

import './navigation.post.css';

/**
 * React Class Navigation.
 * Данный класс отвечает за отрисовку навигации.
 * Более подробную информацию, вы можете посмотреть в *.ru.md файле
 *
 * @class
 */
class Navigation extends React.Component {
    static defaultProps = {
        brandName: 'Brand'
    };

    static propTypes = {
        brandName: React.PropTypes.string
    };

    /**
     * Компонент замаунтился
     * @public
     */
    componentDidMount() {}


    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const bLinks = _.map(routes, route =>
            <li key={ `navigation-route-${route.route}` }>
                <Link activeClassName="navbar__link_active_yes" className="navbar__link" to={ route.route }>{ route.name }</Link>
            </li>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">{ this.props.brandName }</Link>
                    </div>

                    <ul className="nav navbar-nav">
                        { bLinks }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
