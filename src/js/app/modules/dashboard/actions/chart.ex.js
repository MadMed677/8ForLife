import CONSTANTS            from '../constants';

/**
 * Экшен, по получению всех данных chart'а
 *
 * @return {Object} action
 */
export const getAllChartData = () => dispatch => {
    dispatch({
        type: CONSTANTS.GET_ALL_DATA_REQUEST,
        payload: [],
        fetching: true
    });

    setTimeout(() => {
        dispatch({
            type: CONSTANTS.GET_ALL_DATA_SUCCESS,
            payload: [] || [
                {
                    categoryName: 'Здоровье и спорт',
                    value: 9
                },
                {
                    categoryName: 'Друзья и окружение',
                    value: 8
                },
                {
                    categoryName: 'Отношения',
                    value: 7
                }
            ],
            fetching: false
        });
    }, 2000);
};

/**
 * Экшен, по получению одного из элементов chart'а
 *
 * @param {Object} elem - элемент chart'а
 *
 * @return {Object} action
 */
export const getSingleChartData = elem => dispatch => {
    dispatch({
        type: CONSTANTS.GET_SINGLE_DATA_REQUEST,
        payload: {},
        fetching: true
    });

    setTimeout(() => {
        dispatch({
            type: CONSTANTS.GET_SINGLE_DATA_SUCCESS,
            payload: {
                ...elem
            },
            fetching: false
        });
    }, 1000);
};

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
