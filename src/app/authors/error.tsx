'use client';

import { FETCH_ERROR_MESSAGE } from '@/constants/errors';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="space-y-4 max-w-4xl w-full rounded-xl bg-white shadow-lg p-6 border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {FETCH_ERROR_MESSAGE}
      </h2>
      <div className="text-gray-600 dark:text-gray-400 font-mono text-sm lg:text-base">
        Error: {error.message}
      </div>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  );
}
