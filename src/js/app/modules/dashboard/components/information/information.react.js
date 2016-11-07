import React            from 'react';

/**
 * React Presentation Component - Information
 * Отвечает за вывод подробных данных, категории из "колеса жизни"
 *
 * @class
 */
class Information extends React.Component {
    static propTypes = {
        category: React.PropTypes.object
    };

    static defaultProps = {
        category: {
            data: {},
            fetching: true
        }
    };

    state = {

    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const category = this.props.category.data || {};

        return (
            <div>
                <h3>{ category.name }</h3>
            </div>
        );
    }
}

export default Information;
