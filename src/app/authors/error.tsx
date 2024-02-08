'use client';

import { FETCH_ERROR_MESSAGE } from '@/app/constants';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>{FETCH_ERROR_MESSAGE}</h2>
      <div>{error.message}</div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
