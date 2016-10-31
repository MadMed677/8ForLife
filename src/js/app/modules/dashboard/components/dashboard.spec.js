import _            from 'lodash';
import CONST        from '../constants';
import ACTIONS      from '../actions';

describe('<Dashboard />', () => {
    describe('# константы', () => {
        it('должны все ключи и значения констант, быть равны', () => {
            _.each(CONST, (k, v) => expect(k).to.equal(v));
        });
    });

    describe('# reducers', () => {
        const allDataReducer = require('../reducers/all-data').default;
        const singleDataReducer = require('../reducers/single-data').default;

        // TODO: актуализировать тесты, когда появятся middleware
        // на данный момент это тесты - пустышки, так как reducer'ы, на данный момент ничего не делают.
        // В будущем, будет реализованы middleware, и надо будет мокать их и проверять в самом reducer'е
        it('получение всех данных для отрисовки графика', () => {
            const initialState = [];
            const newState = allDataReducer(initialState, ACTIONS.getAllData());

            expect(newState).to.eql([]);
        });

        it('получение подробных данных, по выбранной категории', () => {
            const initialState = {};
            const newState = singleDataReducer(initialState, ACTIONS.getSingleData());

            expect(newState).to.eql({});
        });
    });
});
