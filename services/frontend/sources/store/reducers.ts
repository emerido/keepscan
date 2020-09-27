import { combineReducers } from 'redux'


export default combineReducers({
    entities: combineReducers({
        deposit: require('entities/Deposit/reducer').default,
        network: require('entities/Network/reducer').default,
    })
})
