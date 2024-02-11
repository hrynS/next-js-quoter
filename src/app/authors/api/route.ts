import { IAuthor } from '@/app/types';
import { DEFAULT_SERVER_ERROR, mockAuthors } from '@/constants';
import { serverErrorResponse } from '@/utils/errorResponse';

export const revalidate = 10;

export async function GET() {
  try {
    const authors = await new Promise<IAuthor[]>((resolve) => {
      resolve(mockAuthors);
    });

    return Response.json(authors);
  } catch (e) {
    console.error(e);
    return serverErrorResponse(DEFAULT_SERVER_ERROR);
  }
}
