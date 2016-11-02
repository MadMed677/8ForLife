describe('# Хелпер функции для Chart', () => {
    describe('# функция: arrayConversion', () => {
        const arrayConversion = require('./helpers').arrayConversion;

        let inputData = [];
        afterEach(() => {
            inputData = [
                {
                    categoryName: 'Category 1',
                    value: 1
                },
                {
                    categoryName: 'Category 2',
                    value: 2
                }
            ];
        });

        it('должно содержать 2 ключа: data и labels', () => {
            const result = arrayConversion(inputData);

            expect(result).to.be.a('object');
            expect(result).to.have.all.keys('data', 'labels');
        });

        it('должно на выходе вернуть объект с 2 полями: data и labels', () => {
            const result = arrayConversion(inputData);

            expect(result).to.deep.equal({
                data: [1,2],
                labels: ['Category 1', 'Category 2']
            });
        });
    });
});
