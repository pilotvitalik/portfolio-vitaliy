const initialState = {
    num: 1,
}

function increment(num){
    return ++num;
}

export default function defaultReducer(state = initialState, action){
    switch (action.type) {
        case 'default/increment':
            return {
                ...state,
                num: increment(state.num),
            }
        default:
            return state;
    }
}