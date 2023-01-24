import { registration_const } from "../constants/dataConstants";
import getId from "../functions/getId";
import updateData from "../functions/updateData";

function data_reducer(_, action) {

    let newState = [{}, []];
    let data = JSON.parse(localStorage.getItem('usersData')) || [];

    switch (action.type) {
        case registration_const:
            console.log(data);
            if (data) {
                if (!data.some(u => u.email === action.payload.email)) {
                    newState[0] = { ...action.payload, id: getId(), registrationDate: Date.now() };
                    data = [...data, newState[0]];
                    updateData(data);
                } else {
                    newState[1] = ['user already exist'];
                }
            }
            break;
        default:
    }

    return newState;
}

export default data_reducer;