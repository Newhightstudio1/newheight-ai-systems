export interface Service {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  whatItSolves: string[];
  keyFeatures: string[];
  architectureComponents: string[];
  targetBusinessImpact: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  extendedBio: string;
  expertise: string[];
  responsibilities: string[];
  skills: string[];
  keyProjects: string[];
  relatedServicesSlugs: string[];
  imagePlaceholderLabel: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientType: string;
  industry: string;
  title: string;
  challenge: string;
  businessProblem: string;
  previousProcess: string;
  systemBuilt: string;
  implementationApproach: string[];
  architectureDetails: string[];
  toolsIntegrations: string[];
  outcomeResults: string[];
  isPlaceholder?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  typicalProblem: string;
  aiOpportunity: string;
  possibleSystems: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
}

export interface ConsultationFormData {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  website?: string;
  serviceInterest: string;
  currentTools: string;
  mainChallenge: string;
  desiredOutcome: string;
  estimatedTimeline: string;
}
