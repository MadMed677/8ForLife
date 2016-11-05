import React            from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent
}                       from 'material-ui/Stepper';
import {
    RaisedButton,
    FlatButton,
    TextField
}                       from 'material-ui';

/**
 * React Presentational Component - VerticalStepper
 *
 * @class
 */
class VerticalStepper extends React.Component {
    static propTypes = {
        categories: React.PropTypes.array.isRequired,
        addCategoryName: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        categories: [],
        addCategoryName: () => {}
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
            this.setState({ stepIndex: stepIndex + 1 });
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
                    label={ stepIndex === 2 ? 'Finish' : 'Next' }
                    disableTouchRipple={ true }
                    disableFocusRipple={ true }
                    secondary={ true }
                    onTouchTap={ this.handleNext }
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
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
                        <StepLabel>Create campaign</StepLabel>
                        <StepContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perferendis tempore vero?</p>
                            { this.renderStepActions(1) }
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Create campaign</StepLabel>
                        <StepContent>
                            <p>Lorem ipsum dolor adipisicing elit. Consectetur officia perferendis tempore vero?</p>
                            { this.renderStepActions(2) }
                        </StepContent>
                    </Step>
                </Stepper>
                { finished && (
                    <p style={{margin: '20px 0', textAlign: 'center'}}>
                        <a
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                this.setState({ stepIndex: 0, finished: false });
                            }}
                        >Click here</a> to reset the example.
                    </p>
                )}
            </div>
        );
    }
}

export default VerticalStepper;
