import {_saveQuestion, _saveQuestionAnswer} from "./_DATA";

// eslint-disable-next-line no-undef
describe('data', () => {

    /*
     * Question
     */

    // eslint-disable-next-line no-undef
    it('should save the given question', async () => {
        const question = {
            author: ':author:',
            timestamp: 100,
            optionOneText: ':optionOne.text:',
            optionTwoText: ':optionTwo.text:',
        };

        const res = await _saveQuestion(question);
        expect(res.id).toBeTruthy();
        expect(res.author).toBe(':author:');
        // eslint-disable-next-line no-undef
        expect(res.optionOne.text).toBe(':optionOne.text:');
        // eslint-disable-next-line no-undef
        expect(res.optionTwo.text).toBe(':optionTwo.text:');
    });

    // eslint-disable-next-line no-undef
    it('should not save the given invalid question', function () {
        const res = _saveQuestion({});

        // eslint-disable-next-line no-undef
        expect(res).rejects.toEqual(
            'Please provide optionOneText, optionTwoText, and author'
        );
    });

    /*
     * Answer
     */

    it('should save the given answer', async () => {
        const answer = {
            authedUser: 'erdemkeren',
            qid: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne',
        };

        const res = await _saveQuestionAnswer(answer);
        expect(res).toBeTruthy();
    });

    it('should not save the given invalid answer', function () {
        const res = _saveQuestionAnswer({});

        expect(res).rejects.toEqual(
            'Please provide authedUser, qid, and answer'
        );
    });
});
