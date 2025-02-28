
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const authType = searchParams.get("type") || "login";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {authType === "login" 
                    ? "Welcome back to EntrepreneurHub" 
                    : "Join the EntrepreneurHub community"}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {authType === "login"
                    ? "Sign in to access your projects, connections, and continue building your network."
                    : "Create an account to submit projects, connect with investors, and grow your business."}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Project Showcase</h3>
                    <p className="text-sm text-muted-foreground">
                      Present your ideas to a curated network of investors
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Investor Matching</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with investors who align with your vision
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Growth Resources</h3>
                    <p className="text-sm text-muted-foreground">
                      Access tools and mentorship to scale your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <AuthForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
