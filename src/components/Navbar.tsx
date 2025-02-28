
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-display font-bold text-primary">
                EntrepreneurHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              } link-underline`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith("/projects")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              } link-underline`}
            >
              Projects
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/resources/guides"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Guides
                </Link>
                <Link
                  to="/resources/webinars"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Webinars
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              } link-underline`}
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth?type=login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/auth?type=register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out md:hidden pt-20`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link
            to="/"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/resources/guides"
            className="text-lg font-medium pl-4 border-l-2 border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Guides
          </Link>
          <Link
            to="/resources/webinars"
            className="text-lg font-medium pl-4 border-l-2 border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Webinars
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/auth?type=login"
                className="button-secondary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/auth?type=register"
                className="button-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
