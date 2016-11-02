import CONST                from '../constants';

const allChartData = (state = { data: [], fetching: false }, action) => {
    switch (action.type) {
        case CONST.GET_ALL_DATA_REQUEST:
            return { data: action.payload, fetching: action.fetching };

        case CONST.GET_ALL_DATA_SUCCESS:
            return { data: action.payload, fetching: state.fetching };

        default:
            return state;
    }
};

export default allChartData;
