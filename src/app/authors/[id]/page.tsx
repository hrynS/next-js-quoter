import { IAuthor, IParamsWithId } from '@/app/types';
import { ERROR_STATUS_VALUE } from '@/constants/errors';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { id },
}: {
  params: IParamsWithId;
}): Promise<Metadata> {
  const data: IAuthor = await fetch(
    `${process.env.PUBLIC_BASE_URL}/api/authors/${id}`,
  ).then((res) => res.json());

  return {
    title: `About ${data?.name}`,
    description: 'What a useless app is this?',
  };
}

export async function generateStaticParams(): Promise<
  Array<{
    id: string;
  }>
> {
  const authors: IAuthor[] = await fetch(
    `${process.env.PUBLIC_BASE_URL}/api/authors`,
  ).then((res) => res.json());

  return authors.map(({ id }) => ({
    id: id.toString(),
  }));
}

export async function getAuthor({ id }: IParamsWithId) {
  try {
    const data = await fetch(
      `${process.env.PUBLIC_BASE_URL}/api/authors/${id}`,
    ).then((res) => res.json());

    if (data.status === ERROR_STATUS_VALUE) throw new Error(data.message);

    return data;
  } catch (e) {
    throw e;
  }
}

export default async function Author({ params }: { params: IParamsWithId }) {
  const author: IAuthor = await getAuthor(params);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        About The Author
      </h1>
      <div className="py-12">
        <div
          key={author.id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Author Name
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                {author.name}
              </p>
              <p className="mt-2 text-gray-500">{author.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
