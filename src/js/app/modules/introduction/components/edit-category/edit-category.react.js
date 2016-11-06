import React            from 'react';
import {
    List
}                       from 'material-ui/List';
import {
    Table,
    TableHeader,
    TableRow,
    TableBody,
    TableHeaderColumn
}                       from 'material-ui/Table';
import {
    RaisedButton,
    FlatButton,
    Subheader
}                       from 'material-ui';

import EditCategoryItem from './__item/edit-category__item.react';

/**
 * React Presentational Component - EditCategory
 * Компонент отвечает за вывод 2'ой секции Stepper'а.
 * В ней пользователь дает категориям значения в первый раз
 *
 * @param {Array} categories - категории
 *
 * @class
 */
class EditCategory extends React.Component {
    static propTypes = {
        categories: React.PropTypes.array.isRequired,
        handleNext: React.PropTypes.func.isRequired,
        handlePrev: React.PropTypes.func.isRequired,
        editCategory: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        categories: [],
        handleNext: () => {},
        handlePrev: () => {},
        editCategory: () => {}
    };

    state = {
        value: 5
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const bCategories = this.props.categories.map( item =>
            <EditCategoryItem
                key={`category-name-${item.name}`}
                editCategory={ this.props.editCategory }
                category={ item }
            />
        );

        return (
            <div>
                <p>
                    Теперь вам нужно будет ввести значения, для введенных категорий.
                    Оценка должна быть от 1 до 10 баллов. Где 1 - это полностью не удовлетворен тому,
                    как обстоят дела в этой категории, а 10 - полностью удовлетворен.
                </p>
                <Table selectable={ false }>
                    <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
                        <TableRow>
                            <TableHeaderColumn>Категория</TableHeaderColumn>
                            <TableHeaderColumn>Значение</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        { bCategories }
                    </TableBody>
                </Table>
                <div style={{ margin: '12px 0' }}>
                    <RaisedButton
                        label="Далее"
                        disableTouchRipple={ true }
                        disableFocusRipple={ true }
                        secondary={ true }
                        onTouchTap={ this.props.handleNext }
                        style={{ marginRight: 12 }}
                        disabled={ !this.props.categories.length }
                    />
                    <FlatButton
                        label="Назад"
                        disableTouchRipple={ true }
                        disableFocusRipple={ true }
                        onTouchTap={ this.props.handlePrev }
                    />
                </div>
            </div>
        );
    }
}

export default EditCategory;
