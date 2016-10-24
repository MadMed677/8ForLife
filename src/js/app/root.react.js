import React                    from 'react';
import { Link }                 from 'react-router';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actionCreators      from './actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

/**
 * React Class Root. Самый базовый класс. Точка входа.
 * @class
 */

class Root extends React.Component {
    render() {
        return (
            <div class="header">
                <h1>
                    <Link to="/">Header</Link>
                </h1>
                { this.props.children }
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;
