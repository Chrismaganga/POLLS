import { saveQuestion, saveQuestionAnswer } from "../lib/api";
import { addAnswerUser, addQuestionUser } from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

interface Question {
  id: string;
  author: string;
  // Add other properties as needed
}

export function receiveQuestions(questions: unknown) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question: Question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function addAnswerQuestion(author: any, qid: any, answer: any) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

export function handleAddQuestion(firstOption: any, secondOption: any) {
    return (dispatch: (arg0: { type: string; question?: Question; author?: string; qid?: string; }) => void, getState: () => { authedUser: any; }) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question: Question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser({ author: question.author, id: question.id }))
            })
    };
}

export function handleAddAnswer(questionId: any, answer: any) {
    return (dispatch: (arg0: { type: string; author?: any; qid: any; answer: any; authedUser?: any; }) => void, getState: () => { authedUser: any; }) => {
        const { authedUser } = getState();
        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}
