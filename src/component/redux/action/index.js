
export const loginAdmin=(data) => ({
    type: "LOGIN_ADMIN",
    payload: data
})

export const loginSales=(data) => ({
    type: "LOGIN_SALES",
    payload: data
})


export const editData=(data) => ({
    type: "EDIT_DATA",
    payload: data
})

export const editDataIndex=(data) => ({
    type: "EDIT_DATA_INDEX",
    payload: data
})