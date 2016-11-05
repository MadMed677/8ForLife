import React            from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent
}                       from 'material-ui/Stepper';
import {
    RaisedButton,
    FlatButton
}                       from 'material-ui';

class VerticalStepper extends React.Component {
    static propTypes = {

    };

    stepCount = 3;

    state = {
        finished: false,
        stepIndex: 0
    };

    handleNext = () => {
        const { stepIndex } = this.state;

        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= this.stepCount - 1
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;

        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                  label={ stepIndex === 2 ? 'Finish' : 'Next' }
                  disableTouchRipple={ true }
                  disableFocusRipple={ true }
                  primary={ true }
                  onTouchTap={ this.handleNext }
                  style={{ marginRight: 12 }}
                />
                {step > 0 && (
                  <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      disableTouchRipple={true}
                      disableFocusRipple={true}
                      onTouchTap={this.handlePrev}
                  />
                )}
            </div>
        );
    };

    render() {
        const { finished, stepIndex } = this.state;
        return (
            <div>
                <Stepper activeStep={ stepIndex } orientation="vertical">
                    <Step>
                        <StepLabel>Select campaign</StepLabel>
                        <StepContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sit.</p>
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
                            onClick={(event) => {
                                event.preventDefault();
                                this.setState({stepIndex: 0, finished: false});
                            }}
                        >
                            Click here
                        </a> to reset the example.
                    </p>
                )}
            </div>
        );
    }
}

export default VerticalStepper;
