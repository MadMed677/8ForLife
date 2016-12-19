import React                from 'react';
import { Router, Route, IndexRoute }    from 'react-router';
import { Provider }         from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root                 from './root.react';
import Dashboard            from './modules/dashboard/module';

injectTapEventPlugin();

/**
 * React Container Component - AppContainer.
 * Компонент - обертка вместо routes
 *
 * @class
 */
class AppContainer extends React.Component {
    static propTypes = {
        routes: React.PropTypes.array.isRequired,
        store: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired,
	    children: React.PropTypes.object
    };

    /**
     * Должен ли компонент обновляться
     *
     * @returns {Boolean}
     * @public
     */
    shouldComponentUpdate() {
        return false;
    }

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const { routes, store, history } = this.props;

        return (
            <Provider store={ store }>
                <Router history={ history }>
                    <Route path="/" component={ Root }>
                        <IndexRoute component={ Dashboard.component } />
                        { routes }
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default AppContainer;
