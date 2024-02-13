import { PageHeader } from '@/components';
import { mockQuotes } from '@/constants';
import Link from 'next/link';

export default function Home() {
  const { authorId, author, content, source } = mockQuotes[1];
  return (
    <>
      <PageHeader>Random Quote</PageHeader>
      <div className="py-12">
        <div
          key={authorId}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="w-full p-8">
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm lg:text-base">
                {content}
              </p>
              <div className="pt-4 flex justify-between items-center">
                <Link
                  href={`/authors/${authorId}`}
                  className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {author}
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {source}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
