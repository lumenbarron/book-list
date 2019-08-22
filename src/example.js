import {createStore} from 'redux';

const initState = {
    todo : [],
    posts: []
}
//store for globalize state
const store = createStore(myreducer)

//reducer describe how the action change
function myreducer (state = initState, action) {
    //console.log(state, action)
    if (action.type == 'add_todo') {
        return {
            ...state, //sobreescribe el estado y solo cambia el todos
            todos : [...state.todos, action.todo]
        }
    }
    if (action.type == 'add_posts') {
        return {
            ...state, //sobreescribe el estado y solo cambia el todos
            todos : [...state.posts, action.post]
        }
    }
}

//action creator describe what you want to do, only describe information
const todoAction = {
    type : 'add_todo',
    todo : 'buy milk'
}

//with dispatch you send it
store.dispatch(todoAction)
store.dispatch( {
    type : 'add_todo',
    todo : 'buy eggs'
})
store.dispatch( {
    type : 'add_posts',
    post : 'make homework'
})

store.subscribe(() => {
    console.log('state update');
    console.log(store.getState()); // el estado actual
    
})