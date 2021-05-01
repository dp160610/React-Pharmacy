
const editDataIndex = (state = {}, action) => {
    switch(action.type){
        case 'EDIT_DATA_INDEX': {
            return action.payload;
        };
        default:
            return state;
    }
}
 export default editDataIndex;