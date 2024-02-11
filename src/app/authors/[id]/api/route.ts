import { IAuthor } from '@/app/types';
import { DEFAULT_SERVER_ERROR, mockAuthors } from '@/constants';
import { errorResponse, serverErrorResponse } from '@/utils/errorResponse';

export const revalidate = 10;

export async function GET(
  request: Request,
  {
    params: { id },
  }: {
    params: { id: IAuthor['id'] };
  },
) {
  try {
    const author = await new Promise<IAuthor | undefined>((resolve) => {
      resolve(mockAuthors.find((author) => author.id == id));
    });

    if (!author) {
      return errorResponse(404, `Author with id - ${id} not found`);
    }

    return Response.json(author);
  } catch (e) {
    console.error(e);
    return serverErrorResponse(DEFAULT_SERVER_ERROR);
  }
}
