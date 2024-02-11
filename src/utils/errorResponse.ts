export function errorResponse(statusCode: number, message: string) {
  return Response.json(
    {
      status: 'error',
      message,
    },
    {
      status: statusCode,
    },
  );
}

export function serverErrorResponse(message: string) {
  return Response.json(
    {
      status: 'error',
      message,
    },
    {
      status: 500,
    },
  );
}
