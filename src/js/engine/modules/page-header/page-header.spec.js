import React                from 'react';
import { shallow }          from 'enzyme';
import PageHeader           from './page-header.react';

describe('<PageHeader />', () => {
    it('компонент имеет класс "page-header"', () => {
        const wrapper = shallow(<PageHeader />);
        expect(wrapper.find('.page-header')).to.have.length(1);
    });
});
