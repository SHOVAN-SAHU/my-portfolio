import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function Home() {
  return (
    <AnimatedContent 
      content={content.about} 
      delay={150}
    />
  );
}