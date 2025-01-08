import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "../../data";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(optionOneText: string, optionTwoText: string, author: string): Promise<Question> {
    return _saveQuestion({optionOneText, optionTwoText, author});
}

export function saveQuestionAnswer(authedUserId: any, qid: any, answer: any) {
    return _saveQuestionAnswer({
        authedUser: authedUserId,
        qid,
        answer
    });
}
