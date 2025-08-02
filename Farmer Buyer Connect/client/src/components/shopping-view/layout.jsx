import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden min-h-screen">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full bg-green-900 p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
