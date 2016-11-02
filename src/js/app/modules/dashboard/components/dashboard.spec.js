import React        from 'react';
import { Provider } from 'react-redux';
import _            from 'lodash';
import { shallow }  from 'enzyme';
import Dashboard    from './dashboard.react';
import CONST        from '../constants';
import ACTIONS      from '../actions';

describe('<Dashboard />', () => {
    describe('# компонент', () => {
        const storeFake = (state = {}) => ({
            default: () => {},
            subscribe: () => {},
            dispatch: () => {},
            getState: () => ({ ...state })
        });

        const store = storeFake();

        xit('компонент содержит "container"', () => {
            const wrapper = shallow(
                <Provider store={ store }>
                    <Dashboard />
                </Provider>
            );

            console.log(wrapper.find('.container').debug());
            expect(wrapper.find('.container')).to.have.length(1);
        });
    });

    describe('# константы', () => {
        it('должны все ключи и значения констант, быть равны', () => {
            _.each(CONST, (k, v) => expect(k).to.equal(v));
        });
    });

    describe('# reducers', () => {
        const allChartDataReducer = require('../reducers/all-data').default;
        const singleDataReducer = require('../reducers/single-data').default;

        xdescribe('all-data', () => {
            it('получение всех данных для отрисовки графика', () => {
                const initialState = { data: [], fetching: false };
                const newState = allChartDataReducer(initialState, ACTIONS.getAllChartData());

                expect(newState).to.eql([]);
            });

            it('получение подробных данных, по выбранной категории', () => {
                const initialState = {};
                const newState = singleDataReducer(initialState, ACTIONS.getSingleChartData());

                expect(newState).to.eql({});
            });
        });
    });
});
