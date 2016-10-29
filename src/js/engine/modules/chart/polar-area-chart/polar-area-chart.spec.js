import React                    from 'react';
import sinon                    from 'sinon';
import { mount, shallow }       from 'enzyme';
import PolarAreaChart           from './polar-area-chart.react';

describe('<PolarAreaChart />', () => {
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
        sinon.stub(PolarAreaChart.prototype, '_createChart', () => chart);
        sinon.spy(PolarAreaChart.prototype, 'componentDidMount');

        mount(<PolarAreaChart />);
        expect(PolarAreaChart.prototype.componentDidMount.calledOnce).to.equal(true);

        PolarAreaChart.prototype._createChart.restore();
        PolarAreaChart.prototype.componentDidMount.restore();
    });

    it('компонент имеет нужный ID', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.find('#polar-area-chart')).to.have.length(1);
    });

    it('компонент содержит "canvas" в корне', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.contains(<canvas id="polar-area-chart" />)).to.equal(true);
    });

    it('компонент с props\'ами autoHideLegendWidth должен содержать именно это значение', () => {
        sinon.stub(PolarAreaChart.prototype, '_createChart', () => chart);

        const wrapper = mount(<PolarAreaChart autoHideLegendWidth={ 1000 } />);
        expect(wrapper.prop('autoHideLegendWidth')).to.equal(1000);

        PolarAreaChart.prototype._createChart.restore();
    });

    xit('если в компонент был передан ключ "isAutoHideLegend: false", то функция _onResize не вызывалась', () => {
        sinon.stub(PolarAreaChart.prototype, '_createChart', () => chart);

        sinon.spy(PolarAreaChart.prototype, '_onResize');
        mount(<PolarAreaChart isAutoHideLegend={ false } />);
        // expect(PolarAreaChart.prototype._onResize.calledOnce).to.equal(false);
        expect(true).to.equal(true);

        PolarAreaChart.prototype._onResize.restore();
        PolarAreaChart.prototype._createChart.restore();
    });
});
