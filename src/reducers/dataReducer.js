import { registration_const } from "../constants/dataConstants";
import getId from "../functions/getId";
import updateData from "../functions/updateData";

function data_reducer(_, action) {

    let newState = [JSON.parse(localStorage.getItem('usersData')) || [], []];

    switch (action.type) {
        case registration_const:
            console.log({ newState, action });
            if (newState[0]) {
                if (!newState[0].some(u => u.email === action.payload.email)) {
                    newState[0] = [...newState[0], { ...action.payload, id: getId() }];
                    updateData(newState[0]);
                }
            }

            break;
        default:
    }

    return newState;
}

export default data_reducer;