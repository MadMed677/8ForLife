import CONSTANTS            from '../constants';

/**
 * Экшен, по получению всех данных chart'а
 *
 * @return {Object} action
 */
export const getAllChartData = () => ({
    type: CONSTANTS.GET_ALL_DATA
});

/**
 * Экшен, по получению одного из элементов chart'а
 *
 * @param {Number} id - id элемента chart'а
 *
 * @return {Object} action
 */
export const getSingleChartData = id => ({
    type: CONSTANTS.GET_SINGLE_DATA,
    payload: { id: id }
});

/**
 * Экшен, по добавлению новых данных
 *
 * @param {Object} newData - новый элемент
 *
 * @return {Object} action
 */
export const addSingle = newData => ({
    type: CONSTANTS.ADD_SINGLE_DATA,
    payload: newData
});
