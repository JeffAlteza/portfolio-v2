'use client';

import Link from 'next/link';
import { FC } from 'react';

interface DownloadLinkProps {
  link: string;
  label: string;
}

const DownloadLink: FC<DownloadLinkProps> = ({ link, label }) => (
  <Link
    href={link}
    className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    {label}
  </Link>
);

export default DownloadLink;
