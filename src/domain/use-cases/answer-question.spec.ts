import { expect, test } from 'vitest'
import { Answer } from '../entities/answer'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'

const fakeAnswerRepository: AnswerRepository = {
    create: async (answer: Answer) => { 
        return
    }
}

test('should be create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'This is a new answer'
    })

    expect(answer.content).toEqual('This is a new answer')
})