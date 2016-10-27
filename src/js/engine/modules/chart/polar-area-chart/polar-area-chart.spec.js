import React                    from 'react';
import sinon                    from 'sinon';
import { mount, shallow }       from 'enzyme';
import PolarAreaChart           from './polar-area-chart.react';

describe('<PolarAreaChart />', () => {
    it('компонент успешно замаунтился', () => {
        sinon.spy(PolarAreaChart.prototype, 'componentDidMount');
        mount(<PolarAreaChart />);
        expect(PolarAreaChart.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('компонент имеет нужный ID', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.find('#polar-area-chart')).to.have.length(1);
    });

    it('компонент содержит "canvas" в корне', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.contains(<canvas id="polar-area-chart" />)).to.equal(true);
    });
});
