import React        from 'react';
import { Provider } from 'react-redux';
import _            from 'lodash';
import { shallow, mount }  from 'enzyme';
import Dashboard    from './dashboard.react';
import CONST        from '../constants';

describe('<Dashboard />', () => {
    describe('# компонент', () => {
        const storeFake = (state = {}) => ({
            default: () => {},
            subscribe: () => {},
            dispatch: () => {},
            getState: () => ({ ...state })
        });

        const store = storeFake();

        it('компонент успешно замаунтился', () => {
            sinon.spy(Dashboard.prototype, 'render');

            mount(
                <Provider store={ store }>
                    <Dashboard />
                </Provider>
            );
            expect(Dashboard.prototype.render.calledOnce).to.equal(true);

            Dashboard.prototype.render.restore();
        });

        it('компонент успешно вызвал "getAllChartData"', () => {
            sinon.spy(Dashboard.prototype, 'componentDidMount');

            mount(
                <Provider store={ store }>
                    <Dashboard />
                </Provider>
            );
            expect(Dashboard.prototype.componentDidMount.calledOnce).to.equal(true);

            Dashboard.prototype.componentDidMount.restore();
        });

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
        describe('all-data', () => {
            const allChartDataReducer = require('../../reducers/all-data').default;
            let initialState = null;

            beforeEach(() => {
                initialState = {
                    data: [],
                    fetching: false
                };
            });

            it('должен вернуть текущий state, если action не передан', () => {
                const newState = allChartDataReducer(initialState, {});

                expect(newState).to.deep.equal(initialState);
            });

            it('должен вернуть initialState, если отправлен запрос на получение данных', () => {
                const action = {
                    type: CONST.GET_ALL_DATA_REQUEST
                };
                const newState = allChartDataReducer(initialState, action);

                expect(newState).to.deep.equal(initialState);
            });

            it('должен вернуть данные, если запрос успешно отработал', () => {
                const action = {
                    type: CONST.GET_ALL_DATA_SUCCESS,
                    payload: [
                        { categoryName: 'Здоровье и спорт', value: 9 },
                        { categoryName: 'Random text', value: 3 }
                    ],
                    fetching: true
                };
                const newState = allChartDataReducer(initialState, action);

                expect(newState).to.deep.equal({
                    data: [
                        { categoryName: 'Здоровье и спорт', value: 9 },
                        { categoryName: 'Random text', value: 3 }
                    ],
                    fetching: true
                });
            });
        });

        describe('single-data', () => {
            const singleDataReducer = require('../../reducers/single-data').default;
            let initialState = null;

            beforeEach(() => {
                initialState = {
                    data: [],
                    fetching: false
                };
            });

            it('должен вернуть текущий state, если action не передан', () => {
                const newState = singleDataReducer(initialState, {});

                expect(newState).to.deep.equal(initialState);
            });

            it('должен вернуть initialState, если отправлен запрос на получение данных', () => {
                const action = {
                    type: CONST.GET_SINGLE_DATA_REQUEST
                };
                const newState = singleDataReducer(initialState, action);

                expect(newState).to.deep.equal(initialState);
            });

            it('должен вернуть данные, если запрос успешно отработал', () => {
                const action = {
                    type: CONST.GET_SINGLE_DATA_SUCCESS,
                    payload: {
                        categoryName: 'Здоровье и спорт',
                        value: 9,
                        priority: 5,
                        todos: 7
                    },
                    fetching: true
                };
                const newState = singleDataReducer(initialState, action);

                expect(newState).to.deep.equal({
                    data: {
                        categoryName: 'Здоровье и спорт',
                        value: 9,
                        priority: 5,
                        todos: 7
                    },
                    fetching: true
                });
            });
        });
    });
});
