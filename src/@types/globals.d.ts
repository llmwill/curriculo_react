declare global {
  interface Education {
    id: number
    institution: string
    course: string
    period: string
    userId: number
  }

  interface Experience {
    id: number
    company: string
    position: string
    period: string
    description: string
    userId: number
  }

  interface Project {
    id: number
    name: string
    description: string
    userId: number
  }

  interface User {
    id: number
    name: string
    email: string
    phone: string
    educations: Education[]
    experiences: Experience[]
    skills: string[]
    projects: Project[]
  }
}

export {}
