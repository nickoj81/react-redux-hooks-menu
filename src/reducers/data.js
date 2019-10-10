import definitions from '../actions/definitions';

const initialState = {
    albumData: {},
}

const createDataReducer = () => ({
    [definitions.GET_DATA_SUCCESS]: getDataSuccess,
    [definitions.GET_DATA_ERROR]: getDataError,
})

const getDataSuccess = (state, action) => {
    const albumData = action.data.sort((a, b) => a.band < b.band ? -1 : 1)
        .reduce((bands, item) => {
            bands[item.band] = bands[item.band] || {};

            bands[item.band][item.album] = bands[item.band][item.album] || [];
            bands[item.band][item.album].push(item.song);

            return bands
        }, {});
    return { ...state, albumData }
}

const getDataError = (state, action) => (
    {
        ...state, albumData: action.error
    })

const reducers = createDataReducer();

const data = (state = initialState, action) => 
    (action.type in reducers) ? reducers[action.type](state, action) : state;

export {
    data as default,
    getDataSuccess,
}