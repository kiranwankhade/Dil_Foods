import axios from "axios"
import { 
    GET_CHART_DATA_ERROR, 
    GET_CHART_DATA_LOADING,
    GET_CHART_DATA_SUCCESS,
    GET_BEST_SELLING_ERROR,
    GET_BEST_SELLING_LOADING,
    GET_BEST_SELLING_SUCCESS } from "./chartdata.actionTypes";

export const getProductData = (year) => async (dispatch) => {
    dispatch({ type: GET_CHART_DATA_LOADING })
    try {
        let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/productsDetails?year=${year}`);
        dispatch({ type: GET_CHART_DATA_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_CHART_DATA_ERROR })
    }
}

export const getBestSelling = (year) => async (dispatch) => {
    dispatch({ type: GET_BEST_SELLING_LOADING })
    try {
        let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/bestSellers?year=${year}`);
        dispatch({ type: GET_BEST_SELLING_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_BEST_SELLING_ERROR })
    }
}