import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-[40%] bg-primary p-6 flex flex-col">
        <Link
          to="/signin"
          className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          back to website
        </Link>
        <div className="flex-1" />
        <div className="text-xs text-white/60 flex gap-4">
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms & Privacy
          </Link>
          <span>Copyright © 2024 Techrity Inc. All rights reserved.</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[60%] p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
};