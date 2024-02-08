import { mockAuthors, mockQuotes } from '@/app/constants';
import { IParamsWithId } from '@/app/types';

export async function generateStaticParams() {
  const authors = await new Promise((resolve) => {
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

    return author ?? {};
  } catch (e) {
    throw e;
  }
}

export default async function Author({ params }: { params: IParamsWithId }) {
  const author = await getAuthor(params);

  return (
    <div key={author.id}>
      <div>{author.name}</div>
      <div>{author.description}</div>
    </div>
  );
}
