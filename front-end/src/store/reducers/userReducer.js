const initialState = {
    firstName: "",
    accounts: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                firstName: action.payload.user.firstName,
                accounts: action.payload.user.accounts,
            };
        case "LOGOUT":
            return initialState;
        case "UPDATE_FIRST_NAME":
            return {
                ...state,
                firstName: action.firstName,
            };
        default:
            return state;
    }
};

export default userReducer;
