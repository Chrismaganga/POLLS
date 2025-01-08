import {receiveQuestions} from "./questions";
import { getInitialData } from "../lib/api";
import { receiveUsers } from "./users";

export function handleInitialData() {
    return async (dispatch: (arg0: { type: string; users?: any; questions?: any; }) => void) => {
        const { users, questions } = await getInitialData();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    };
}
