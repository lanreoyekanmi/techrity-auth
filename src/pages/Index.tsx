import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/AuthLayout";

const Index = () => {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Techrity</h1>
          <p className="text-muted-foreground">
            Join our community and start your journey
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/signin">
            <Button className="w-full" variant="default">
              Sign In
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button className="w-full" variant="outline">
              Create Account
            </Button>
          </Link>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Index;