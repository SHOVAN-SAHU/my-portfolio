import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function Skills() {
  return (
    <AnimatedContent 
      content={content.skills} 
      delay={80}
    />
  );
}