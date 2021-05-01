import { combineReducers } from 'redux';

import loginAdmin from './loginAdmin.js';
import loginSales from './loginSales.js';
import editData from './editData';
import editDataIndex from './editDataIndex';

const allReducers = combineReducers({
    loginAdmin,
    loginSales,
    editDataIndex,
    editData,

})

export default allReducers;