import { Answer } from "../entities/answer"
import { AnswerRepository } from '../repositories/answer-repository'
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

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
        const answer = Answer.create({ 
            content, 
            authorId: new UniqueEntityID(instructorId), 
            questionId: new UniqueEntityID(questionId)
        })

        await this.answerRepository.create(answer)
        return answer    
    }
}