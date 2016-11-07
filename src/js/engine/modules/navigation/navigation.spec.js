import React                from 'react';
import sinon                from 'sinon';
import { mount, shallow }   from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Navigation           from './navigation.react';

injectTapEventPlugin();

describe('<Navigation />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(
            <MuiThemeProvider>
                <Navigation />
            </MuiThemeProvider>
        );
    });

    it('компонент замаунтился', () => {
        expect(wrapper.find(Navigation)).to.have.length(1);
    });
});
