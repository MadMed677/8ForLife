import React      from 'react';
import sinon                    from 'sinon';
import { mount, shallow }       from 'enzyme';
import PolarAreaChart           from './polar-area-chart.react';

describe('<PolarAreaChart />', () => {
    it('компонент имеет нужный ID', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.find('#polar-area-chart')).to.have.length(1);
    });

    it('компонент содержит "canvas" в корне', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(wrapper.contains(<canvas id="polar-area-chart" />)).to.equal(true);
    });

    it('компонент в поле "chart" записывает данные после mount\'а', () => {
        const wrapper = shallow(<PolarAreaChart />);
        expect(PolarAreaChart.chart).to.be.a('object');
        expect(true).to.equal(true);
    });
});
