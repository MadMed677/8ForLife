import React        from 'react';
import { Link }     from 'react-router';

/**
 * React Class Main. Главный компонент, в который происходит рендер данных
 *
 * @class
 */
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Brand</Link>
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

                <div className="container">First content</div>
            </div>
        );
    }
}
