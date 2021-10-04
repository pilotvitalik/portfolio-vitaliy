const initialState = {
    typeAuth: [
        {
            id: 1,
            title: 'Здесь Вы можете ознакомиться с моими работами.',
            buttonName: 'Ознакомиться',
        },
        {
            id: 2,
            title: 'Для более детального ознакомления с работами, необходимо авторизоваться.',
            buttonName: 'Зарегистрироваться',
        }
    ]
}

export default function MainReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}