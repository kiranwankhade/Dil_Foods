import { 
    GET_CHART_DATA_ERROR, 
    GET_CHART_DATA_LOADING,
    GET_CHART_DATA_SUCCESS,
    GET_BEST_SELLING_ERROR,
    GET_BEST_SELLING_LOADING,
    GET_BEST_SELLING_SUCCESS } from "./chartdata.actionTypes";

const initialState = {
    chartData: [],
    loading: false,
    error: false,
    bestSellingLoading:false,
    bestSelling:[],
}

export const chartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHART_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case GET_CHART_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                chartData: payload
            }
        }
        case GET_CHART_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        case GET_BEST_SELLING_LOADING: {
            return {
                ...state,
                bestSellingLoading: true,
                error: false,
            }
        }
        case GET_BEST_SELLING_SUCCESS: {
            return {
                ...state,
                bestSellingLoading: false,
                error: false,
                bestSelling: payload
            }
        }
        case GET_BEST_SELLING_ERROR: {
            return {
                ...state,
                bestSellingLoading: false,
                error: true,
            }
        }

        default: {
            return initialState;
        }

    }
}