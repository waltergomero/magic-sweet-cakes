import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import AdminFooter from "@/components/ui/admin-footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/admin.css';

export default function AdminLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-auto">
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      <ToastContainer 
                theme="colored"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                toastClassName="text-md"
                pauseOnFocusLoss
                pauseOnHover/>
        <AdminFooter />
      </main>
    </div>
  );
}
