import React            from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent
}                       from 'material-ui/Stepper';
import { Link }         from 'react-router';
import {
    RaisedButton,
    FlatButton,
    TextField
}                       from 'material-ui';

import EditCategory     from '../edit-category/edit-category.react';
import {
    PolarAreaChart
}                       from 'chart/index';

/**
 * React Presentational Component - VerticalStepper
 * Компонент отвечает за вывод всего Stepper'а.
 * Состоит из 3 секция:
 *  1. Ввод названий категорий
 *  2. Ввод значение для категорий
 *  3. Смотрит результат, перенаправляем на /dashboard
 *
 * @param {Array} categories - массив с категориями
 * @param {Function} addCategoryName - функция, по добавлению новой категории
 * @param {Function} editCategory - функция, по редактированию категории
 *
 * @class
 */
class VerticalStepper extends React.Component {
    static propTypes = {
        categories: React.PropTypes.array.isRequired,
        addCategoryName: React.PropTypes.func.isRequired,
        editCategory: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        categories: [],
        addCategoryName: () => {},
        editCategory: () => {}
    };

    state = {
        finished: false,
        stepIndex: 0,
        categoryName: ''
    };

    /**
     * Количество элементов в stepper'е
     *
     * @type {number}
     */
    stepCount = 3;

    /**
     * Переход к следующему шагу
     *
     * @public
     */
    handleNext = () => {
        const { stepIndex } = this.state;

        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= this.stepCount - 1
        });
    };

    /**
     * Вернуться к предыдущему шагу
     *
     * @public
     */
    handlePrev = () => {
        const { stepIndex } = this.state;

        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    /**
     * Изменено название категории
     *
     * @param {Event} event - event
     * @private
     */
    _changeCategoryName = event => {
        this.setState({
            categoryName: event.target.value
        });
    };

    /**
     * Сохраняет название категории
     *
     * @private
     */
    _saveCategory = () => {
        this.props.addCategoryName(this.state.categoryName);
        this.setState({ categoryName: '' });
    };

    /**
     * Отрисовка данных, для каждого шага
     *
     * @param {Number} step - номер текущего шага
     * @returns {JSX}
     */
    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={ stepIndex === 2 ? 'Конец' : 'Далее' }
                    disableTouchRipple={ true }
                    disableFocusRipple={ true }
                    secondary={ true }
                    onTouchTap={ this.handleNext }
                    style={{ marginRight: 12 }}
                    disabled={ !this.props.categories.length }
                />
                {step > 0 && (
                    <FlatButton
                        label="Назад"
                        disabled={ stepIndex === 0 }
                        disableTouchRipple={ true }
                        disableFocusRipple={ true }
                        onTouchTap={ this.handlePrev }
                    />
                )}
            </div>
        );
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div>
                <Stepper activeStep={ stepIndex } orientation="vertical">
                    <Step>
                        <StepLabel>Введите названия категорий</StepLabel>
                        <StepContent>
                            <p>Тут вам нужно ввести названия категорий, которые вы хотите отслеживать.</p>
                            <p>Мы рекомендуем использоватеть 8 категорий</p>
                            <div className="row">
                                <div className="col-sm-8">
                                    <TextField
                                        floatingLabelText="Введите название категории"
                                        fullWidth={ true }
                                        onChange={ this._changeCategoryName }
                                        value={ this.state.categoryName }
                                    />
                                </div>
                                <div className="col-sm-4" style={{ paddingTop: '30px' }}>
                                    <RaisedButton label="Сохранить" primary={ true } onTouchTap={ this._saveCategory } />
                                </div>
                            </div>
                            { this.renderStepActions(0) }
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Определите значения для введенных категорий</StepLabel>
                        <StepContent>
                            <EditCategory
                                categories={ this.props.categories }
                                handleNext={ this.handleNext }
                                handlePrev={ this.handlePrev }
                                editCategory={ this.props.editCategory }
                            />
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Результат</StepLabel>
                        <StepContent>
                            <p>Отлично! Ты только что заполнил все данные.</p>
                            <p>
                                Теперь ты видишь график, который показывает, на сколько все хорошо/плохо.
                                Главное, это чтобы это "колесо жизни" могло катиться.
                            </p>

                            <PolarAreaChart data={ this.props.categories } />

                            <p>
                                Теперь ты можешь переходить на основную страницу сайта, и заполнять свое колесо жизни более подробно.
                                Очень важно, составить TODO лист того, что тебе надо сделать, для того, чтобы в каждой из сфер, что ты определил,
                                можно было сделать один из пунктов этого листа и это бы продвинуло тебя на шаг ближе к 10'тке.
                            </p>
                            { this.renderStepActions(2) }
                        </StepContent>
                    </Step>
                </Stepper>
                { finished && (
                    <div style={{ margin: '20px 0', textAlign: 'center' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <Link to="/dashboard">Перейти на главную страницу</Link> и отслеживать процесс.
                        </div>
                        <div>
                            <span>Или ты можешь</span>
                            <FlatButton
                                label="изменить данные"
                                style={{ marginLeft: '5px' }}
                                onTouchTap={ () => this.setState({ stepIndex: 0, finished: false }) }
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default VerticalStepper;
