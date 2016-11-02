import CONSTANTS            from '../constants';

export const getAllData = () => ({
    type: CONSTANTS.GET_ALL_DATA
});

export const getSingleData = id => ({
    type: CONSTANTS.GET_SINGLE_DATA,
    id: id
});
