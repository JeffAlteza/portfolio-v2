'use client';

import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex justify-center py-6">
        <ul className="flex space-x-4">
          <li>
            <Link href="#home" className="text-gray-600 hover:text-gray-800 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">
              Project
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
};