import React                    from 'react';
import { Link }                 from 'react-router';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actionCreators      from './actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

/**
 * React Class Root. Самый базовый класс. Точка входа.
 * @className
 */

class Root extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                { this.props.children }
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Root);

export default App;
