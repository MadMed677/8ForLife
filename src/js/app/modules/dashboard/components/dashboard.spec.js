import React                from 'react';
import sinon                from 'sinon';
import { mount }            from 'enzyme';
import Dashboard            from './dashboard.react';

describe('<Dashboard />', () => {
    xit('компонент успешно замаунтился', () => {
        sinon.spy(Dashboard.prototype, 'componentDidMount');

        mount(<Dashboard />);
        expect(Dashboard.prototype.componentDidMount.calledOnce).to.equal(true);

        Dashboard.prototype.componentDidMount.restore();
    });
});
