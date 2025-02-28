
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  fundingGoal: number;
  fundingRaised: number;
  likes: number;
  views: number;
  createdBy: {
    name: string;
    avatarUrl: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const fundingPercentage = (project.fundingRaised / project.fundingGoal) * 100;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className="chip bg-white/90 backdrop-blur-sm text-primary">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between mb-1 text-sm">
            <span>
              ${project.fundingRaised.toLocaleString()} raised
            </span>
            <span>{fundingPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            Goal: ${project.fundingGoal.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={project.createdBy.avatarUrl}
              alt={project.createdBy.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm">{project.createdBy.name}</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <div className="flex items-center text-xs">
              <Heart className="h-3.5 w-3.5 mr-1" />
              {project.likes}
            </div>
            <div className="flex items-center text-xs">
              <Eye className="h-3.5 w-3.5 mr-1" />
              {project.views}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <Link to={`/projects/${project.id}`}>
            <Button className="w-full">
              View Project
              <TrendingUp className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
