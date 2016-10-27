import React            from 'react';
import { mount }        from 'enzyme';
import sinon            from 'sinon';

import RadarChart       from './radar-chart.react';

describe('<RadarChart />', () => {
    it('компонент успешно замаунтился', () => {
        sinon.spy(RadarChart.prototype, 'componentDidMount');
        mount(<RadarChart />);
        expect(RadarChart.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});
