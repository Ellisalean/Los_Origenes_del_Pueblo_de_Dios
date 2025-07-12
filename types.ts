
export interface User {
  uid: string;
  name: string | null;
  email: string | null;
  imageUrl: string | null;
}

export interface NavItem {
  id: string;
  title: string;
}

export interface Hotspot {
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Slide {
    image: string;
    caption: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  url: string;
}

export type ContentBlockType = 
  | { type: 'heading'; level: 2 | 3 | 4; text: string; }
  | { type: 'paragraph'; text: string; }
  | { type: 'image'; src: string; alt: string; caption?: string; }
  | { type: 'video'; src: string; }
  | { type: 'accordion'; items: { title: string; content: string; }[]; }
  | { type: 'interactiveImage'; src: string; alt: string; hotspots: Hotspot[]; }
  | { type: 'quiz'; data: QuizQuestion; }
  | { type: 'slideshow'; slides: Slide[]; }
  | { type: 'reflection'; questions: { question: string; perspective: string; }[]; }
  | { type: 'resources'; items: ResourceItem[]; };

export interface Section {
  id: string;
  title: string;
  content: ContentBlockType[];
}