export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function receiveUsers(users: any) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function addAnswerUser(authedUser: string, qid: number, answer: string) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}

export function addQuestionUser({ author, id }: { author: string; id: string }) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}
