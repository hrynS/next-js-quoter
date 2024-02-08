import { mockQuotes } from '@/app/constants';
import Link from 'next/link';

export default function Home() {
  const { authorId, author, content, source } = mockQuotes[1];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="space-y-4 max-w-4xl w-full rounded-xl bg-white shadow-lg p-6 border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
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
    </main>
  );
}
