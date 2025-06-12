export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
}

export interface ContentBlock {
  type: 'heading' | 'subheading' | 'text' | 'list' | 'code' | 'link';
  content: string;
  level?: number;
}