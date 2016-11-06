import React            from 'react';
import { Slider }       from 'material-ui';
import {
    TableRow,
    TableRowColumn
}                       from 'material-ui/Table';

/**
 * React Presentational Component - EditCategoryItem
 * Компонент отвечает за вывод 2'ой секции Stepper'а.
 * В ней пользователь дает категориям значения в первый раз
 *
 * @param {Object} category - категорий
 * @param {String} category.name - название категории
 * @param {Number} category.value - значение категории
 * @param {Function} editCategory - функция, по редактированию категорий
 *
 * @class
 */
class EditCategoryItem extends React.Component {
    static propTypes = {
        category: React.PropTypes.object.isRequired,
        editCategory: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        category: {},
        editCategory: () => {}
    };

    /**
     * Был изменено начение slider'а
     *
     * @param {Event} event - event
     * @param {Number} value - новое значение для текущей категории
     * @public
     */
    editCategory = (event, value) => {
        this.props.editCategory({
            name: this.props.category.name,
            value: value
        });
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const { category } = this.props;

        return (
            <TableRow key={`category-name-${category}`}>
                <TableRowColumn>
                    { category.name }
                </TableRowColumn>
                <TableRowColumn style={{ textAlign: 'center' }}>
                    { category.value }
                </TableRowColumn>
                <TableRowColumn>
                    <Slider
                        step={ 1 }
                        value={ category.value }
                        min={ 1 }
                        max={ 10 }
                        onChange={ this.editCategory }
                    />
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default EditCategoryItem;
