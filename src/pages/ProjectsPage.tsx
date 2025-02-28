
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ChevronDown, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { Project } from "@/components/ProjectCard";

// Mock projects data
const mockProjects: Project[] = [
  {
    id: "1",
    title: "EcoHarvest: Sustainable Agriculture Technology",
    description: "Revolutionary IoT system that optimizes water usage and monitors crop health for sustainable farming practices.",
    imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80",
    category: "AgriTech",
    fundingGoal: 150000,
    fundingRaised: 89000,
    likes: 127,
    views: 1453,
    createdBy: {
      name: "Maria Garcia",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: "2",
    title: "MindfulAI: Mental Health Companion",
    description: "AI-powered application that provides personalized mental health support through cognitive behavioral therapy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    category: "HealthTech",
    fundingGoal: 200000,
    fundingRaised: 165000,
    likes: 245,
    views: 2156,
    createdBy: {
      name: "James Wilson",
      avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  },
  {
    id: "3",
    title: "UrbanMove: Smart City Transportation",
    description: "Electric micro-mobility solution with integrated city navigation and carbon offset tracking.",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    category: "Mobility",
    fundingGoal: 300000,
    fundingRaised: 142000,
    likes: 189,
    views: 1752,
    createdBy: {
      name: "Sofia Chen",
      avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  },
  {
    id: "4",
    title: "WaterPure: Portable Filtration System",
    description: "Advanced water filtration technology that removes contaminants and provides clean drinking water in emergency situations.",
    imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777540?auto=format&fit=crop&w=800&q=80",
    category: "CleanTech",
    fundingGoal: 75000,
    fundingRaised: 11500,
    likes: 86,
    views: 947,
    createdBy: {
      name: "Robert Lee",
      avatarUrl: "https://randomuser.me/api/portraits/men/24.jpg",
    },
  },
  {
    id: "5",
    title: "EdTech Pro: Personalized Learning Platform",
    description: "AI-driven education platform that adapts to individual learning styles and provides customized curriculum paths.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    category: "EdTech",
    fundingGoal: 180000,
    fundingRaised: 92400,
    likes: 153,
    views: 1892,
    createdBy: {
      name: "Emily Johnson",
      avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  },
  {
    id: "6",
    title: "SecureChain: Blockchain Supply Chain Solution",
    description: "Blockchain-based platform that ensures transparency and traceability in global supply chains.",
    imageUrl: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=800&q=80",
    category: "Blockchain",
    fundingGoal: 250000,
    fundingRaised: 187500,
    likes: 210,
    views: 2450,
    createdBy: {
      name: "David Kim",
      avatarUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "AgriTech",
  "HealthTech",
  "Mobility",
  "CleanTech",
  "EdTech",
  "Blockchain",
  "FinTech",
  "AI & ML",
  "Sustainability",
];

const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("most-recent");

  // Filter projects based on search and category
  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "most-funded") {
      return b.fundingRaised - a.fundingRaised;
    } else if (sortBy === "most-liked") {
      return b.likes - a.likes;
    } else if (sortBy === "most-viewed") {
      return b.views - a.views;
    }
    // Default: most-recent (using ID as proxy for recency)
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Discover Innovative Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Browse through our curated selection of entrepreneurial ventures seeking investment and partnerships.
            </p>
          </div>

          {/* Search and filters */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Button
                    variant="outline"
                    className="flex items-center justify-between w-full md:w-44"
                    onClick={() => {
                      // Toggle dropdown in real app
                    }}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {selectedCategory}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  {/* Dropdown menu would go here */}
                </div>
                <div className="relative">
                  <Button
                    variant="outline"
                    className="flex items-center justify-between md:w-44"
                    onClick={() => {
                      // Toggle dropdown in real app
                    }}
                  >
                    Sort: {sortBy.replace(/-/g, " ")}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  {/* Dropdown menu would go here */}
                </div>
                <div className="hidden md:flex rounded-md border border-input">
                  <Button
                    variant="ghost"
                    className={`px-3 ${
                      viewMode === "grid" ? "bg-secondary" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className={`px-3 ${
                      viewMode === "list" ? "bg-secondary" : ""
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Project results */}
          <div>
            {sortedProjects.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium">{sortedProjects.length}</span> projects
                  </p>
                </div>
                <ProjectGrid projects={sortedProjects} />
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
