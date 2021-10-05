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
    ],
    isShowModal: false,
}

export default function MainReducer(state = initialState, action){
    console.log(action.type)
    switch(action.type){
        case 'main/showModal': {
            return {
                ...state,
                isShowModal: true,
            }
        }
        case 'main/closeModal': {
            return {
                ...state,
                isShowModal: false,
            }
        }
        default:
            return state;
    }
}