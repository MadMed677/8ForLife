import CONST                from '../constants';

const initialState = {
    data: [],
    fetching: false
};

const allChartData = (state = initialState, action) => {
    switch (action.type) {
        case CONST.GET_ALL_DATA_REQUEST:
            return initialState;

        case CONST.GET_ALL_DATA_SUCCESS:
            return {
                data: action.payload,
                fetching: action.fetching
            };

        default:
            return state;
    }
};

export default allChartData;
