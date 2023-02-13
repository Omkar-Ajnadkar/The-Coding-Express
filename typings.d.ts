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
  location: string
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
  category: string
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

export interface Hackathon extends SanityBody {
  _type: 'hackathon'
  title: string
  image: Image
  link: string
  year: date
  description: string
}

export interface Publication extends SanityBody {
  _type: 'publication'
  title: string
  conference: string
  publication: string
  citations: number
  publicationLink: string
  datePublished: date
  description: text[]
}

export interface Data {
  profile: Profile
  socials: Social[]
  experiences: Experience[]
  skills: Skill[]
  publications: Publication[]
  educations: Education[]
  projects: Project[]
  hackathons: Hackathon[]
}
