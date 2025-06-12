import AnimatedContent from '@/components/AnimatedContent';
import { content } from '@/lib/content';

export default function Contact() {
  return (
    <AnimatedContent 
      content={content.contact} 
      delay={90}
    />
  );
}