import React            from 'react';
import {
    ListItem
}                       from 'material-ui/List';
import {
    RaisedButton,
    FlatButton,
    TextField,
    Subheader,
    Slider
}                       from 'material-ui';

/**
 * React Presentational Component - EditCategoryItem
 * Компонент отвечает за вывод 2'ой секции Stepper'а.
 * В ней пользователь дает категориям значения в первый раз
 *
 * @param {Object} category - категорий
 * @param {String} category.name - название категории
 * @param {Number} category.value - значение категории
 *
 * @class
 */
class EditCategoryItem extends React.Component {
    static propTypes = {
        category: React.PropTypes.object.isRequired
    };

    static defaultProps = {
        category: {}
    };

    state = {
        value: 5
    };

    /**
     * Компонент замаунтился
     */
    componentDidMount() {
        this.setState({
            value: this.props.category.value
        });
    }

    /**
     * Изменили значение слайдера
     *
     * @param {Event} event - event
     * @param {Number} value - значение слайдера
     * @private
     */
    _handleSliderChange = (event, value) => {
        this.setState({ value });
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
            <div key={`category-name-${category}`}>
                <ListItem
                    primaryText={ category.name }
                    secondaryText={ this.state.value }
                />
                <Slider
                    step={ 1 }
                    value={ this.state.value }
                    min={ 1 }
                    max={ 10 }
                    onChange={ this._handleSliderChange }
                />
            </div>
        );
    }
}

export default EditCategoryItem;
