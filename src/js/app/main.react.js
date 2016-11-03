import React        from 'react';
import Navigation   from 'navigation/navigation.react';

/**
 * React Class Main. Главный компонент, в который происходит рендер данных
 *
 * @class
 */
class Root extends React.Component {
    static propTypes = {
        children: React.PropTypes.object
    };

    /**
     * Метод для отрисовки компонента
     *
     * @render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Navigation />
                { this.props.children }
            </div>
        );
    }
}

export default Root;
