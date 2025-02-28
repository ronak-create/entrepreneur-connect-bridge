
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type AuthType = "login" | "register";
type UserRole = "entrepreneur" | "investor" | "mentor";

const AuthForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") as AuthType || "login";
  const [authType, setAuthType] = useState<AuthType>(initialType);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    if (authType === "login") {
      // Here you would normally authenticate the user
      toast({
        title: "Logged in successfully",
        description: "Welcome back to EntrepreneurHub!",
      });
      navigate("/dashboard");
    } else {
      // Here you would normally register the user
      if (!role) {
        toast({
          title: "Please select a role",
          description: "You need to select a role to continue.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Account created successfully",
        description: "Welcome to EntrepreneurHub!",
      });
      navigate("/dashboard");
    }
  };

  const toggleAuthType = () => {
    setAuthType(authType === "login" ? "register" : "login");
  };

  const handleRoleSelection = (selectedRole: UserRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          {authType === "login" ? "Welcome back" : "Create your account"}
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          {authType === "login"
            ? "Enter your credentials to access your account"
            : "Fill in the details below to get started"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {authType === "register" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {authType === "login" && (
              <a
                href="/forgot-password"
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </a>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {authType === "register" && (
          <div className="space-y-3">
            <Label>Select your role</Label>
            <div className="grid grid-cols-3 gap-3">
              <RoleButton
                role="entrepreneur"
                isSelected={role === "entrepreneur"}
                onClick={() => handleRoleSelection("entrepreneur")}
              />
              <RoleButton
                role="investor"
                isSelected={role === "investor"}
                onClick={() => handleRoleSelection("investor")}
              />
              <RoleButton
                role="mentor"
                isSelected={role === "mentor"}
                onClick={() => handleRoleSelection("mentor")}
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" size="lg">
          {authType === "login" ? "Sign In" : "Create Account"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center text-sm mt-6">
          {authType === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={toggleAuthType}
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleAuthType}
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

interface RoleButtonProps {
  role: UserRole;
  isSelected: boolean;
  onClick: () => void;
}

const RoleButton: React.FC<RoleButtonProps> = ({
  role,
  isSelected,
  onClick,
}) => {
  const labels = {
    entrepreneur: "Entrepreneur",
    investor: "Investor",
    mentor: "Mentor",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-3 rounded-lg border ${
        isSelected
          ? "bg-primary/5 border-primary"
          : "border-input hover:border-primary/50"
      } transition-all text-center`}
    >
      {isSelected && (
        <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-primary" />
      )}
      <span className="text-sm font-medium">{labels[role]}</span>
    </button>
  );
};

export default AuthForm;
