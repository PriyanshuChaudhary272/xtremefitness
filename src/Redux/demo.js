const redux = require('redux');

const counterreducer = (state = {counter: 0}, action) =>{
    if(action.type === "increament")
    {
        return {
            counter: state.counter + 1
        };
    }
    else if(action.type === "decrement")
    {
        return {
            counter: state.counter - 1
        };
    }
    else{
        return state;
    }
};

const store = redux.createStore(counterreducer);
const counterSubscriber = () =>{
    const latestState = store.getState()
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increament'});
store.dispatch({type: 'decrement'});