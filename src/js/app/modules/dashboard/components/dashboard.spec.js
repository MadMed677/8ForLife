import _            from 'lodash';

describe('<Dashboard />', () => {
    describe('# константы', () => {
        it('должны все ключи и значения констант, быть равны', () => {
            const CONST = require('../constants').default;

            _.each(CONST, (k, v) => expect(k).to.equal(v));
        });
    });
});
