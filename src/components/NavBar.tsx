import Link from 'next/link';

interface NavbarProps {
  routes: Record<string, string>;
}

const Navbar = ({ routes }: NavbarProps) => (
  <nav className="bg-white-shadow shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <ul className="flex space-x-4">
          {Object.entries(routes).map(([label, link]) => (
            <li
              key={label}
              className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
