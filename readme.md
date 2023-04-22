## DDD (Domain-drive Design)

#### Overview
This repository contains a sample implementation of Domain-driven Design (DDD) architecture. The goal of this project is to showcase how to structure and organize a codebase following the principles of DDD.

#### Architecture
```
.
├── package.json
├── package-lock.json
├── readme.md
├── src
│   └── domain
│       ├── entities
│       │   ├── answer.ts
│       │   ├── instructor.ts
│       │   ├── question.ts
│       │   └── student.ts
│       └── use-cases
│           ├── answer-question.spec.ts
│           └── answer-question.ts
└── tsconfig.json
```