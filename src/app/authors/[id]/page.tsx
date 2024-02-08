import { mockAuthors, mockQuotes } from '@/app/constants';
import { IAuthor, IParamsWithId } from '@/app/types';

export async function generateStaticParams(): Array<{
  id: string;
}> {
  const authors = await new Promise<IAuthor[]>((resolve) => {
    resolve(mockAuthors);
  });

  return authors.map(({ id }) => ({
    id: id.toString(),
  }));
}

export async function getAuthor(params: IParamsWithId) {
  try {
    const author = await new Promise((resolve) => {
      resolve(mockAuthors.find((author) => author.id == params.id));
    });

    if (!author) throw new Error('Sorry, there is no author in this URL((');

    return author;
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
      <div className="py-12 ">
        <div
          key={author.id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="p-8">
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
