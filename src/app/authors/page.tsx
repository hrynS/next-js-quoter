import { IAuthor } from '@/app/types';
import { PageHeader } from '@/components';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The authors I read',
  description: 'What a useless app is this?',
};

export async function getAuthors(): Promise<IAuthor[]> {
  try {
    return await fetch(`${process.env.PUBLIC_BASE_URL}/api/authors`).then(
      (res) => res.json(),
    );
  } catch (e) {
    throw e;
  }
}

export default async function Authors() {
  const authors = await getAuthors();
  return (
    <>
      <PageHeader>The Authors I Read</PageHeader>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-wrap justify-center gap-2">
        {authors.map(({ name, id }) => {
          return (
            <Link
              key={id}
              href={`authors/${id}`}
              className="flex flex-col flex-grow w-full sm:w-2/5 justify-center items-center p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 hover:border-indigo-500 m-2 min-h-24"
            >
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}
