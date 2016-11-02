import CONST            from '../constants';

const initialState = {
    data: {},
    fetching: false
};

const singleChartData = (state = initialState, action) => {
    switch (action.type) {
        case CONST.GET_SINGLE_DATA_REQUEST:
            return state;

        case CONST.GET_SINGLE_DATA_SUCCESS:
            return {
                data: action.payload,
                fetching: action.fetching
            };

        default:
            return state;
    }
};

export default singleChartData;
