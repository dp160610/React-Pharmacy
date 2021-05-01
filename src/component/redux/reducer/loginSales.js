
const loginSales = (state = false, action) => {
    switch(action.type){
        case 'LOGIN_SALES': {
            return !state
        };
        default:
            return state;
    }
}
 export default loginSales;