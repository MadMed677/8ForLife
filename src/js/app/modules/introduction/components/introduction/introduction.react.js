import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import actionCreators           from 'actions';
import { pick }                 from 'lodash';

import PageHeader               from 'page-header/page-header.react';
import VerticalStepper          from '../vertical-stepper/vertical-stepper.react';

const mapStateToProps = state => ({
    allChartData: state.allChartData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators([], dispatch);

/**
 * React Container Component - Introduction.
 * Класс отвечает за главный компонент на /introduction
 *
 * @class
 */
class Introduction extends React.Component {
    state = {
        categories: []
    };

    /**
     * Добавление новой категории
     *
     * @param {String} categoryName - название категории
     * @private
     */
    _onAddCategoryName = categoryName => {
        this.setState({
            categories: [
                ...this.state.categories,
                {
                    name: categoryName,
                    value: 5
                }
            ]
        });
    };

    /**
     * Изменяет значение категории
     *
     * @param {Object} newCategory - категория
     *
     * @private
     */
    _onEditCategory = newCategory => {
        const index = this.state.categories.findIndex(category =>
            category.name === newCategory.name
        );

        this.setState({
            categories: [
                ...this.state.categories.slice(0, index),
                newCategory,
                ...this.state.categories.slice(index + 1)
            ]
        });
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div className="container">
                <PageHeader>
                    <h2>- Introduction -</h2>
                </PageHeader>

                <VerticalStepper
                    categories={ this.state.categories }
                    addCategoryName={ this._onAddCategoryName }
                    editCategory={ this._onEditCategory }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
