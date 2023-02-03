interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: 'string'
  }
}

export interface Technology extends SanityBody {
  _type: 'technology'
  title: string
  image: Image
  progress: number
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  link: string
}

export interface Profile extends SanityBody {
  _type: 'profile'
  name: string
  role: string
  heroImage: Image
  backgroundInfo: text[]
  profileImage: Image
  phoneNumber: string
  email: string
  address: string
  socials: Social[]
}

export interface Experience extends SanityBody {
  _type: 'experience'
  jobTitle: string
  companyImage: Image
  company: string
  companyLink: string
  dateStarted: date
  dateEnded: date
  isCurrentlyWorking: boolean
  description: text[]
  technologies: Technology[]
}

export interface Skill extends SanityBody {
  _type: 'skill'
  title: string
  image: Image
  progress: number
}

export interface Education extends SanityBody {
  _type: 'education'
  title: string
  university: string
  image: Image
  educationLink: string
  gpa: string
  dateStarted: date
  dateEnded: date
  description: any
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  projectLink: string
  dateStarted: date
  dateEnded: date
  description: text[]
  technologies: Technology[]
}

export interface Data {
  profile: Profile
  socials: Social[]
  experiences: Experience[]
  skills: Skill[]
  educations: Education[]
  projects: Project[]
}
