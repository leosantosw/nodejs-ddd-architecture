import { Answer } from "../entities/answer"
import { AnswerRepository } from '../repositories/answer-repository'

interface AnswerQuestionUseCaseRequest {
    content: string
    questionId: string
    instructorId: string
}

export class AnswerQuestionUseCase {
    constructor(
        private answerRepository: AnswerRepository
    ){}

    async execute({ content, questionId, instructorId }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({ 
            content, 
            authorId: instructorId, 
            questionId
        })

        await this.answerRepository.create(answer)
        return answer    
    }
}