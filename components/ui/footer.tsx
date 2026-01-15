import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>&copy; 2026 Magic Sweet Cakes. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-800 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-800 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
