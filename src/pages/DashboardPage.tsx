
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  BarChart, 
  Briefcase, 
  MessageSquare, 
  Users, 
  Settings,
  PlusCircle,
  Search,
  Bell,
  User,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Clock,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Simple mock data for dashboard
const upcomingMeetings = [
  { id: 1, title: "Project Review: EcoHarvest", date: "Today, 2:00 PM", attendees: 3 },
  { id: 2, title: "Investment Discussion with Horizon Capital", date: "Tomorrow, 11:30 AM", attendees: 2 },
  { id: 3, title: "Mentorship Session", date: "Feb 25, 10:00 AM", attendees: 1 },
];

const recentActivities = [
  { id: 1, type: "message", content: "New message from Michael Chen", time: "5 min ago" },
  { id: 2, type: "project", content: "Your project received a new investor inquiry", time: "2 hours ago" },
  { id: 3, type: "funding", content: "Funding milestone achieved: $50,000", time: "Yesterday" },
];

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const role = "entrepreneur"; // This would come from auth context in a real app

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-6">
              <span className="text-xl font-display font-bold text-primary">
                EntrepreneurHub
              </span>
            </Link>
            
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <div className="relative">
              <button className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Garcia" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">Maria Garcia</p>
                  <p className="text-xs text-muted-foreground capitalize">{role}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] fixed top-16 left-0 z-20">
          <nav className="p-4 space-y-2">
            <NavItem 
              icon={<Home />} 
              label="Overview" 
              isActive={activeTab === "overview"} 
              onClick={() => setActiveTab("overview")} 
            />
            <NavItem 
              icon={<Briefcase />} 
              label="Projects" 
              isActive={activeTab === "projects"} 
              onClick={() => setActiveTab("projects")} 
            />
            <NavItem 
              icon={<BarChart />} 
              label="Analytics" 
              isActive={activeTab === "analytics"} 
              onClick={() => setActiveTab("analytics")} 
            />
            <NavItem 
              icon={<MessageSquare />} 
              label="Messages" 
              isActive={activeTab === "messages"} 
              onClick={() => setActiveTab("messages")} 
              badge={2}
            />
            <NavItem 
              icon={<Users />} 
              label="Network" 
              isActive={activeTab === "network"} 
              onClick={() => setActiveTab("network")} 
            />
            <NavItem 
              icon={<Settings />} 
              label="Settings" 
              isActive={activeTab === "settings"} 
              onClick={() => setActiveTab("settings")} 
            />
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 ml-20 md:ml-64 p-6">
          {/* Dashboard Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Maria</h1>
              <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="/submit-project">
                <Button className="w-full md:w-auto">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Active Projects" 
              value="3" 
              change="+1 this month"
              icon={<Briefcase className="h-6 w-6 text-primary" />}
            />
            <MetricCard 
              title="Investor Connections" 
              value="12" 
              change="+5 this month"
              icon={<Users className="h-6 w-6 text-primary" />}
            />
            <MetricCard 
              title="Total Funding" 
              value="$142,500" 
              change="+$42,500 this month"
              icon={<DollarSign className="h-6 w-6 text-primary" />}
            />
            <MetricCard 
              title="Avg. Response Rate" 
              value="94%" 
              change="+2% this month"
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
            />
          </div>
          
          {/* Dashboard Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Progress */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Project Progress</h2>
                <Link to="/projects" className="text-sm text-primary hover:underline">View all</Link>
              </div>
              
              <div className="space-y-6">
                <ProjectProgressItem 
                  title="EcoHarvest: Sustainable Agriculture Technology"
                  progress={60}
                  funding="$89,000 / $150,000"
                  investors={5}
                  status="active"
                />
                <ProjectProgressItem 
                  title="UrbanMove: Smart City Transportation"
                  progress={45}
                  funding="$42,000 / $300,000"
                  investors={3}
                  status="active"
                />
                <ProjectProgressItem 
                  title="WaterPure: Portable Filtration System"
                  progress={10}
                  funding="$11,500 / $75,000"
                  investors={1}
                  status="new"
                />
              </div>
            </div>
            
            {/* Upcoming Meetings */}
            <div className="bg-white rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Upcoming Meetings</h2>
                <Link to="/calendar" className="text-sm text-primary hover:underline">View calendar</Link>
              </div>
              
              <div className="space-y-4">
                {upcomingMeetings.map(meeting => (
                  <div key={meeting.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{meeting.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {meeting.date}
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex -space-x-2">
                          {Array(Math.min(meeting.attendees, 3)).fill(0).map((_, i) => (
                            <Avatar key={i} className="h-6 w-6 border-2 border-white">
                              <AvatarImage src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${22 + i}.jpg`} />
                              <AvatarFallback>U{i}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        {meeting.attendees > 3 && (
                          <span className="text-xs text-muted-foreground ml-1">
                            +{meeting.attendees - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Schedule Meeting
              </Button>
            </div>
            
            {/* Recent Activity */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
                <Button variant="ghost" size="sm">
                  Mark all as read
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      {activity.type === 'message' && <MessageSquare className="h-5 w-5 text-primary" />}
                      {activity.type === 'project' && <Briefcase className="h-5 w-5 text-primary" />}
                      {activity.type === 'funding' && <DollarSign className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">{activity.content}</p>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: number;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick, badge }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full space-x-3 py-2 px-3 rounded-lg transition-colors
        ${isActive 
          ? 'bg-primary/10 text-primary' 
          : 'text-muted-foreground hover:bg-gray-100'
        }`}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="hidden md:inline font-medium">{label}</span>
      {badge && (
        <span className="hidden md:flex ml-auto bg-primary text-white text-xs rounded-full h-5 w-5 items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold mt-2">{value}</p>
        </div>
        <div className="rounded-lg p-3 bg-primary/10">
          {icon}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4">{change}</p>
    </div>
  );
};

interface ProjectProgressItemProps {
  title: string;
  progress: number;
  funding: string;
  investors: number;
  status: 'active' | 'completed' | 'new';
}

const ProjectProgressItem: React.FC<ProjectProgressItemProps> = ({ 
  title, progress, funding, investors, status 
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">{title}</h3>
          <span className={`px-2 py-0.5 text-xs rounded-full 
            ${status === 'active' ? 'bg-blue-100 text-blue-800' : 
              status === 'completed' ? 'bg-green-100 text-green-800' : 
              'bg-yellow-100 text-yellow-800'}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <Button variant="ghost" size="sm">View</Button>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <span>{funding}</span>
        <span>{progress}% Complete</span>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-primary h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">{investors} Investors</span>
      </div>
    </div>
  );
};

export default DashboardPage;
