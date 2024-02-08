import { mockAuthors } from '@/app/constants';
import Link from 'next/link';

export async function getAuthors() {
  try {
    const authors = await new Promise((resolve) => {
      resolve(mockAuthors);
    });

    return authors;
  } catch (e) {
    throw e;
  }
}

export default async function Authors() {
  const authors = await getAuthors();
  return (
    <div className="flex flex-row gap-10">
      {authors.map(({ name, id }) => {
        return (
          <Link
            key={id}
            href={`authors/${id}`}
            className="flex justify-center items-center p-5 bg-white rounded-lg border-gray-300 min-h-24"
          >
            {name} tile
          </Link>
        );
      })}
    </div>
  );
}
