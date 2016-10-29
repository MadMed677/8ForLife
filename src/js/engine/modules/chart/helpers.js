/**
 * Функция по преобразовыванию массива данных, вида
 * [{categoryName: 'name1', value: 1}, {categoryName: 'name2', value: 2}]
 *
 * @param {Array} inputData - исходный массив с данными
 *
 * @return {Object} возвращает объект с 2 свойствами: data {Array}, labels {Array}
 */
export const arrayConversion = (inputData = []) => ({
    data: inputData.map(d => d.value),
    labels: inputData.map(d => d.categoryName)
});
