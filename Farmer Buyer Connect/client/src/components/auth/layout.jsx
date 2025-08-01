import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative min-h-screen items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/src/assets/Bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "blur(5px)",
          
        }}
      />
      
      {/* Content with overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-black/40">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Farmer Buyer Connect
            (FBC)
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md bg-white/95 p-8 rounded-lg shadow-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;