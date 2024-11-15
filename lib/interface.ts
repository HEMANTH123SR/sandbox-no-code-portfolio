interface DateComponent {
  year: number | null;
  month: number | null;
  day: number | null;
}

interface Language {
  name: string;
  proficiency: string | null;
}

interface Education {
  start: DateComponent;
  end: DateComponent;
  fieldOfStudy: string | null;
  degree: string | null;
  grade: string | null;
  schoolName: string;
  description: string | null;
  activities: string | null;
  url: string;
  schoolId?: string | null;
}

interface Position {
  companyName: string;
  companyUsername: string | null;
  companyURL: string | null;
  companyLogo: string | null;
  companyIndustry: string | null;
  companyStaffCountRange: string | null;
  title: string;
  location: string | null;
  description: string | null;
  employmentType: string | null;
  start: DateComponent;
  end: DateComponent;
}

interface CertificationCompany {
  name: string;
  universalName: string;
  logo: string | null;
}

interface Certification {
  name: string;
  start: DateComponent;
  end: DateComponent;
  company: CertificationCompany;
  authority: string | null;
}

interface Project {
  title: string;
  description: string | null;
  techStack: string[] | null;
  projectLink: string | null;
  media: string | null;
}

interface GeoLocation {
  country: string | null;
  city: string | null;
  full: string | null;
}

interface Hackathons {
  name: string;
  date: Date | null;
  location: string | null;
  projectTitle: string | null;
  description: string | null;
  teamSize: number | null;
  role: string | null;
  awards: string | null;
  technologiesUsed: string[] | [];
  linkToProject: string | null;
  organizers: string | null;
}

interface Awards {
  title: string;
  description: string | null;
  awardingOrganization: string | null;
  dateReceived: Date | null;
  url: string | null;
}

interface Clients {
  clientName: string;
  projectTitle: string | null;
  description: string | null;
  start: DateComponent;
  end: DateComponent;
  clientWebsite: string | null;
  media: string | null;
}

interface CustomSection {
  title: string;
  content: string;
  picture: string | null;
  order: number | null;
  url: string | null;
}

interface SocialeLinks {
  platform: string;
  link: string;
}

interface Article {
  articleName: string;
  articleDescription: string;
  date: Date | null;
}

interface GuestBook {
  name: string;
  guestNote: string;
}

export interface UserDetailedObjectType {
  urn: string;
  linkedinUserName: string;
  firstName: string;
  lastName: string;
  websites: { websiteName: string; websiteUrl: string }[];
  cv: string | null;
  phoneNumber: number | null;
  jobTitle: string | null;
  isOpenToWork: boolean;
  isHiring: boolean;
  profilePicture: string;
  backgroundPicture: string;
  about: string | null;
  headline: string | null;
  availability:
    | "Full-time"
    | "Part-time"
    | "Freelance"
    | "Contract"
    | "Internship"
    | "Not Available";
  geo: GeoLocation;
  interests: string[] | null;
  hobbies: string[] | null;
  languages: Language[];
  educations: Education[];
  position: Position[];
  skills: string[];
  courses: string[];
  certifications: Certification[];
  projects: Project[];
  hackathons: Hackathons[];
  awards: Awards[];
  clients: Clients[];
  customSection: CustomSection[];
  socialeLinks: SocialeLinks[];
  pictures: string[];
  videos: string[];
  articles: Article[];
  note: string | null;
  guestBook: GuestBook | null;
}
