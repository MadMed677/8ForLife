import React        from 'react';
import Navigation   from 'navigation/navigation.react';

/**
 * React Class Main. Главный компонент, в который происходит рендер данных
 *
 * @class
 */
class Root extends React.Component {
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
                <div className="container">First content</div>
            </div>
        );
    }
}

export default Root;
