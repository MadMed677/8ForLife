import React                    from 'react';
import sinon                    from 'sinon';
import { mount, shallow }       from 'enzyme';
import EmptyData                from './empty-data.react';

describe('<EmptyData />', () => {
    it('компонент успешно замаунтился', () => {
        sinon.spy(EmptyData.prototype, 'render');

        mount(<EmptyData />);
        expect(EmptyData.prototype.render.calledOnce).to.equal(true);

        EmptyData.prototype.render.restore();
    });

    it('компонент имеет класс "empty-data" в корне', () => {
        const wrapper = shallow(<EmptyData />);

        expect(wrapper.find('.empty-data')).to.have.length(1);
    });

    it('компонент, при получении props: fetching, должен отрисовать spinner', () => {
        const wrapper = shallow(<EmptyData fetching={ true } />);

        expect(wrapper.find('.empty-data__spinner')).to.have.length(1);
    });
});
