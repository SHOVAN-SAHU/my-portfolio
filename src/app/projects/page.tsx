import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function Projects() {
  return (
    <AnimatedContent 
      content={content.projects} 
      delay={100}
    />
  );
}