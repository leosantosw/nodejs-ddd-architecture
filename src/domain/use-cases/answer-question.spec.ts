import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('should be create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'This is a new answer'
    })

    expect(answer.content).toEqual('This is a new answer')
})