import React                from 'react';
import sinon                from 'sinon';
import { mount, shallow }   from 'enzyme';
import Information          from './information.react';

describe('<Information />', () => {
    it('компонент успешно замаунтился', () => {
        sinon.spy(Information.prototype, 'render');

        mount(<Information />);

        expect(Information.prototype.render.calledOnce).to.equal(true);
        Information.prototype.render.restore();
    });
});
