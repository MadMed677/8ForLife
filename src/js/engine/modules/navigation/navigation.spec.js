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

    // TODO: в будущем, route будет иметь определенный параметр,
    // TODO: означающий, нужно ли отрисывывать ссылку на него
    it('компонент отрисовывает нужное кол-во ссылок', () => {
        const wrapper = shallow(<Navigation />);
        const routes = require('routes.js').default;

        const routesLength = Object.keys(routes).length;
        expect(wrapper.find('.navbar-nav').find('Link')).to.have.length(routesLength);
    });

    it('компонент отрисовывает верный "brand"', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find('.navbar-brand').find('Link')).to.have.length(1);
        expect(wrapper.prop('brandName')).to.be.defined;
    });
});
