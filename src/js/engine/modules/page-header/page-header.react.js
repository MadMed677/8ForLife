import React            from 'react';

import './page-header.post.css';

/**
 * React Class PageHeader.
 * Данный класс отвечает за отрисовку навигации.
 * Более подробную информацию, вы можете посмотреть в *.ru.md файле
 *
 * @class
 */
class PageHeader extends React.Component {
    static propTypes = {
        children: React.PropTypes.object
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div className="page-header">
                { this.props.children }
            </div>
        );
    }
}

export default PageHeader;
