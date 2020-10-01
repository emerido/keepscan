import { createReducer, withProducer } from 'shared/reducers'
import { fetchTdt, fetchTdtFailure, fetchTdtSuccess } from 'features/get-tdt/actions'

export const initialState = {
    tdt: null,
    tdt_error: false,
    tdt_loading: false,
}

export default createReducer<typeof initialState>(initialState, withProducer)
    .on(fetchTdt, (state) => {
        state.tdt_error = null
        state.tdt_loading = true
    })
    .on(fetchTdtSuccess, (state, { payload }) => {
        state.tdt = payload
        state.tdt_loading = false
    })
    .on(fetchTdtFailure, (state) => {
        state.tdt_error = true
        state.tdt_loading = false
    })