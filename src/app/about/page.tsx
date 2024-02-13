import { PageHeader } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About quoter',
  description: 'What a useless app is this?',
};

export default function About() {
  return (
    <>
      <PageHeader>Why I created this?</PageHeader>
      <div className="py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <p className="text-lg leading-loose font-medium text-black">
              Hey there!
              <br />
              This project was started from the desire to learn Next.js.
              <br />I usually mark the favorite phrases in some books I read,
              but hardly ever have a chance to review and remember anything. So
              this is how they become valuable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
