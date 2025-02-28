
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Upload,
  Info,
  DollarSign,
  Tag,
  BarChart,
  Globe,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Categories for dropdown
const categories = [
  "AgriTech",
  "HealthTech",
  "Mobility",
  "CleanTech",
  "EdTech",
  "Blockchain",
  "FinTech",
  "AI & ML",
  "Sustainability",
  "Other",
];

const SubmitProjectPage: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    fundingGoal: "",
    timeline: "",
    location: "",
    website: "",
    imageFile: null as File | null,
    imagePreview: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const validateCurrentStep = () => {
    if (formStep === 1) {
      if (!formData.title || !formData.shortDescription || !formData.category) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return false;
      }
    } else if (formStep === 2) {
      if (!formData.fundingGoal || !formData.timeline) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setFormStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setFormStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) return;
    
    // Here you would normally submit the data to the backend
    toast({
      title: "Project submitted successfully!",
      description: "Your project is now under review.",
    });
    
    // Redirect to dashboard or project detail page
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Submit Your Project
              </h1>
              <p className="text-lg text-muted-foreground">
                Present your innovative idea to potential investors and partners.
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="mb-10">
              <div className="flex items-center justify-between">
                <ProgressStep 
                  stepNumber={1} 
                  label="Project Basics" 
                  isActive={formStep === 1} 
                  isCompleted={formStep > 1} 
                />
                <div className="grow border-t border-gray-300 mx-2"></div>
                <ProgressStep 
                  stepNumber={2} 
                  label="Funding Details" 
                  isActive={formStep === 2} 
                  isCompleted={formStep > 2} 
                />
                <div className="grow border-t border-gray-300 mx-2"></div>
                <ProgressStep 
                  stepNumber={3} 
                  label="Review & Submit" 
                  isActive={formStep === 3} 
                  isCompleted={formStep > 3} 
                />
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Basics */}
              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base">
                      Project Title <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter a clear, concise title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base">
                      Category <span className="text-destructive">*</span>
                    </Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shortDescription" className="text-base">
                      Short Description <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="shortDescription"
                      name="shortDescription"
                      placeholder="A brief summary of your project (max 150 characters)"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      maxLength={150}
                      rows={2}
                      required
                    />
                    <div className="text-xs text-muted-foreground text-right">
                      {formData.shortDescription.length}/150
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullDescription" className="text-base">
                      Full Description
                    </Label>
                    <Textarea
                      id="fullDescription"
                      name="fullDescription"
                      placeholder="Provide a detailed description of your project, including its purpose, features, and potential impact"
                      value={formData.fullDescription}
                      onChange={handleChange}
                      rows={6}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projectImage" className="text-base">
                      Project Image
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      {formData.imagePreview ? (
                        <div className="relative">
                          <img
                            src={formData.imagePreview}
                            alt="Project preview"
                            className="mx-auto max-h-48 object-contain mb-3"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => 
                              setFormData((prev) => ({
                                ...prev,
                                imageFile: null,
                                imagePreview: "",
                              }))
                            }
                          >
                            Remove Image
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Drag and drop an image, or click to browse
                          </p>
                          <Input
                            id="projectImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => 
                              document.getElementById("projectImage")?.click()
                            }
                          >
                            Browse Files
                          </Button>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Recommended: A high-quality image that represents your project (1200x630 pixels)
                    </p>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button type="button" onClick={handleNext}>
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Funding Details */}
              {formStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="fundingGoal" className="text-base flex items-center">
                      Funding Goal <span className="text-destructive">*</span>
                      <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="fundingGoal"
                        name="fundingGoal"
                        type="number"
                        placeholder="Amount in USD"
                        value={formData.fundingGoal}
                        onChange={handleChange}
                        className="pl-10"
                        min="1000"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Set a realistic funding goal based on your project needs.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-base">
                      Project Timeline <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="timeline"
                        name="timeline"
                        placeholder="e.g., 6 months, 1 year"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base">
                      Project Location
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="location"
                        name="location"
                        placeholder="City, Country"
                        value={formData.location}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-base">
                      Website or Social Media
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button type="button" onClick={handleNext}>
                      Review Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review & Submit */}
              {formStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Review Your Project</h2>
                    <p className="text-muted-foreground mb-4">
                      Please review all details before submitting. You can go back to make changes if needed.
                    </p>
                    
                    <div className="space-y-4">
                      <ReviewItem label="Project Title" value={formData.title} icon={<Info />} />
                      <ReviewItem label="Category" value={formData.category} icon={<Tag />} />
                      <ReviewItem label="Short Description" value={formData.shortDescription} />
                      {formData.fullDescription && (
                        <ReviewItem label="Full Description" value={formData.fullDescription} />
                      )}
                      <ReviewItem 
                        label="Funding Goal" 
                        value={`$${parseInt(formData.fundingGoal).toLocaleString()}`} 
                        icon={<DollarSign />} 
                      />
                      <ReviewItem label="Timeline" value={formData.timeline} icon={<Clock />} />
                      {formData.location && (
                        <ReviewItem label="Location" value={formData.location} icon={<Globe />} />
                      )}
                      {formData.website && (
                        <ReviewItem label="Website" value={formData.website} />
                      )}
                      {formData.imagePreview && (
                        <div className="mt-4">
                          <p className="font-medium mb-2">Project Image</p>
                          <img
                            src={formData.imagePreview}
                            alt="Project preview"
                            className="max-h-48 object-contain rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button type="submit">
                      Submit Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface ProgressStepProps {
  stepNumber: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  stepNumber,
  label,
  isActive,
  isCompleted,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full h-8 w-8 flex items-center justify-center text-sm font-medium ${
          isActive
            ? "bg-primary text-white"
            : isCompleted
            ? "bg-primary/90 text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {stepNumber}
      </div>
      <span
        className={`mt-2 text-xs ${
          isActive || isCompleted ? "text-primary font-medium" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

interface ReviewItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-start gap-2 border-b border-border pb-3">
      {icon && <div className="text-primary mt-0.5">{React.cloneElement(icon as React.ReactElement, { size: 16 })}</div>}
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className={`${value.length > 100 ? 'text-sm' : ''} text-muted-foreground`}>{value}</p>
      </div>
    </div>
  );
};

export default SubmitProjectPage;
