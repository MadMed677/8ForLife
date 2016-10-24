import React                from 'react';
import sinon                from 'sinon';
import { mount, shallow }   from 'enzyme';
import Navigation           from './navigation.react';

describe('<Navigation />', () => {
    it('компонент замаунтился', () => {
        sinon.spy(Navigation.prototype, 'componentDidMount');
        mount(<Navigation />);
        expect(Navigation.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('компонент имеет класс "navbar"', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find('.navbar')).to.have.length(1);
    });

    it('компонент имеет класс "navbar-header"', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find('.navbar .navbar-header')).to.have.length(1);
    });

    it('компонент имеет класс "navbar-nav"', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find('.nav.navbar-nav')).to.have.length(1);
    });
});
