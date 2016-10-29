import React            from 'react';
import { mount }        from 'enzyme';
import sinon            from 'sinon';

import RadarChart       from './radar-chart.react';

describe('<RadarChart />', () => {
    let chart = {};

    beforeEach(() => {
        chart = {
            options: {
                legend: {
                    display: true
                }
            },
            update: () => {}
        };
    });

    it('компонент успешно замаунтился', () => {
        sinon.stub(RadarChart.prototype, '_createChart', () => chart);

        sinon.spy(RadarChart.prototype, 'componentDidMount');
        mount(<RadarChart />);
        expect(RadarChart.prototype.componentDidMount.calledOnce).to.equal(true);

        RadarChart.prototype._createChart.restore();
    });
});
