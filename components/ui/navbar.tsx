export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Notifications
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
