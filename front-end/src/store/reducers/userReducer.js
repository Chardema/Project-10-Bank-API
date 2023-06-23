const initialState = {
    firstName: "",
    lastName :"",
    email:"",
    accounts: [],
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                firstName: action.payload.user.firstName,
                lastName: action.payload.user.lastName,
                email:action.payload.user.email,
                accounts: action.payload.user.accounts,
            };
        case "LOGOUT":
            return initialState;
        case "UPDATE_FIRST_NAME":
            return {
                ...state,
                firstName: action.firstName,
            };
        case "UPDATE_LAST_NAME":
            console.log(action.lastName);
            return {
                ...state,
                lastName: action.lastName,
            };
        default:
            return state;
    }
};

export default userReducer;
