import React            from 'react';
import {
    AppBar
}                       from 'material-ui';

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
        return (
            <AppBar
              title="8ForLife"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

export default Navigation;
