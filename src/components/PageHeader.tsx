import { PropsWithChildren } from 'react';

export default function PageHeader({ children }: PropsWithChildren) {
  return (
    <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{children}</h1>
  );
}
