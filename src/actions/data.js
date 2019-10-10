import definitions from '../actions/definitions';
import axios from 'axios';

const getData = url => dispatch => {
    dispatch({ type: definitions.GET_DATA });
    axios.get(url)
        .then(
            response =>
                dispatch(getDataSuccess(response.data))
        ).catch(
            error => dispatch(getDataError(error))
        )
};

const getDataSuccess = data => ({
    data,
    type: definitions.GET_DATA_SUCCESS
});

const getDataError = error => ({
    error,
    type: definitions.GET_DATA_ERROR
});


export {
    getData,
    getDataSuccess,
    getDataError,

}