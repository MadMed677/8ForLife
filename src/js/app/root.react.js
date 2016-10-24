import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actionCreators      from './config/actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

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

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;
