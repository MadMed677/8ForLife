import React            from 'react';
import { Link }         from 'react-router';

/**
 * React Class Navigation. Класс за вывод навигации.
 *
 * @class
 */
class Navigation extends React.Component {
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
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Brand</Link>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Link 2</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
