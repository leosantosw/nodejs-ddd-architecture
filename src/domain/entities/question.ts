import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'

interface QuestionProps {
    title: string
    slug: Slug
    content: string
    studentId: string 
    authorId: string
}

export class Question extends Entity {
    public title: string
    public slug: Slug
    public content: string
    public studentId: string
    public authorId: string

    constructor(props: QuestionProps, id?: string) {
        super(id)
        this.title = props.title
        this.content = props.content
        this.slug = props.slug
        this.studentId = props.studentId
        this.authorId = props.authorId
    }
}