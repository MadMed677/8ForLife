import React            from 'react';
import { Link }         from 'react-router';

/**
 * React Class Navigation. Класс за вывод навигации.
 *
 * @class
 */
class Navigation extends React.Component {
    /**
     * Метод для отрисовки компонента
     *
     * @render
     * @return {JSX}
     */
    render() {
        return (
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
        );
    }
}

export default Navigation;
