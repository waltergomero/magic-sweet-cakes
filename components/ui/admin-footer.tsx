import React from 'react'

const AdminFooter = () => {
  return (
        <footer className="bg-white border-t border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>&copy; 2026 Magic Sweetcakes. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-800">Privacy Policy</a>
              <a href="#" className="hover:text-gray-800">Terms of Service</a>
              <a href="#" className="hover:text-gray-800">Contact</a>
            </div>
          </div>
        </footer>
  )
}

export default AdminFooter