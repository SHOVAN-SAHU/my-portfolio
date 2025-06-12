import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function About() {
  return (
    <AnimatedContent 
      content={content.about} 
      delay={100}
    />
  );
}