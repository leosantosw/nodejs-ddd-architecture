import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'

interface QuestionProps {
    title: string
    slug: Slug
    content: string
    studentId: UniqueEntityID 
    authorId: UniqueEntityID
}

export class Question extends Entity<QuestionProps> {}