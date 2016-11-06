import React                from 'react';
import sinon                from 'sinon';
import { mount, shallow }   from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    Slider
}                           from 'material-ui';

import EditCategoryItem     from './edit-category__item.react';

injectTapEventPlugin();

describe('<EditCategoryItem />', () => {
    let categoryStub = {
        name: 'Категория 1',
        value: 8
    };
    let wrapper = null;

    beforeEach(() => {
        categoryStub = {};
        wrapper = mount(
            <MuiThemeProvider>
                <Table>
                    <TableBody>
                        <EditCategoryItem category={ categoryStub } />
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    });

    it('компонент успешно замаунтился', () => {
        sinon.spy(EditCategoryItem.prototype, 'render');

        mount(
            <MuiThemeProvider>
                <Table>
                    <TableBody>
                        <EditCategoryItem category={ categoryStub } />
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
        expect(EditCategoryItem.prototype.render.calledOnce).to.equal(true);

        EditCategoryItem.prototype.render.restore();
    });

    it('должен содержать компонент <Slider/>', () => {
        expect(wrapper.find('Slider')).to.have.length(1);
    });
});
