import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    content: string
    questionId: string
    instructorId: string
}

export class AnswerQuestionUseCase {
    execute({ content, questionId, instructorId }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({ 
            content, 
            authorId: instructorId, 
            questionId
        })
        return answer    
    }
}