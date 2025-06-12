import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function Experience() {
  return (
    <AnimatedContent 
      content={content.experience} 
      delay={120}
    />
  );
}