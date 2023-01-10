import { registration_const } from "../constants/dataConstants";

export function registration_action(newData) {
    return {
        type: registration_const,
        payload: newData
    };
}