import React                from 'react';
import {
    Step,
    Stepper,
    StepLabel
}                           from 'material-ui/Stepper';
import {
    RaisedButton,
    FlatButton
}                           from 'material-ui';
import { If, Then, Else }   from 'react-if';

/**
 * React Presentation Component - InputData
 *
 * @class
 */
class InputData extends React.Component {
    static propTypes = {

    };

    state = {
        finished: false,
        stepIndex: 0
    };

    constructor() {
        super();
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (<div>
                    <span>Some text</span>
                    <input type="text"/>
                </div>);
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px'};

        return (
            <div>
                <Stepper activeStep={ stepIndex }>
                    <Step>
                        <StepLabel>Select campaign settings</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create an ad group</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create an add</StepLabel>
                    </Step>
                </Stepper>

                <div style={ contentStyle }>
                    <If condition={ finished }>
                        <Then>
                            <p>
                                <a href="#" onClick={ e => { e.preventDefault(); this.setState({ stepIndex: 0, finished: false }); }}>
                                    Click here
                                </a> to reset
                            </p>
                        </Then>
                        <Else>{() =>
                            <div>
                                <p>{this.getStepContent(stepIndex)}</p>
                                <div style={{marginTop: 12}}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onTouchTap={this.handlePrev}
                                        style={{marginRight: 12}}
                                    />
                                    <RaisedButton
                                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                                        primary={true}
                                        onTouchTap={this.handleNext}
                                    />
                                </div>
                            </div>
                        }</Else>
                    </If>
                </div>
            </div>
        );
    }
}

export default InputData;
