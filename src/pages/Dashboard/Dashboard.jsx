import React, { useState } from "react";
import { Bell, ChevronRight, LogOut } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import logo from "../../assets/logo.png";

// Sidebar Component
const Sidebar = () => (
  <div className="bg-white p-4 flex flex-col h-full">
    <div className="mb-8">
      <img src={logo} alt="Logo" className="h-8 self-start mb-8" />
    </div>
    <nav className="flex-grow">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Schedule</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Progress</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
    <div className="mt-auto">
      <button className="flex items-center space-x-2 text-gray-600">
        <LogOut className="h-5 w-5" />
        <span>Log out</span>
      </button>
    </div>
  </div>
);

// Header Component
const Header = ({ user }) => (
  <header className="flex justify-between items-center mb-6">
    <div className="flex-grow relative max-w-full">
      <input
        type="text"
        placeholder="Search"
        className="pl-8 pr-4 py-2 rounded-full border border-blue-200 w-full outline-none focus:ring-0"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Search Icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div className="flex items-center space-x-4 ml-4">
      {/* Added Notification Badge */}
      <div className="relative">
        <Bell className="h-6 w-6 text-gray-500" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          3
        </span>
      </div>
      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
      {/* Added Upgrade to Premium Button */}
    </div>
  </header>
);

// Banner Component
const Banner = () => (
  <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
    <h2 className="text-2xl font-bold mb-2">Effective Learning!</h2>
    <p className="mb-4">
      Learning is easy and effective with us. Open the panel and watch your
      progress and growth in knowledge!
    </p>
  </div>
);

// Events Component
const Events = ({ events }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Events</h3>
      <button className="text-blue-500 flex items-center">
        More <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">{event.date}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {event.attendees}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm font-medium mb-2">{event.title}</h4>
            <p className="text-gray-600 text-sm">{event.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Updated Progress Component with Graph
const Progress = ({ courses }) => {
  const data = courses.map((course, index) => ({
    name: course.name,
    progress: course.progress,
  }));

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Progress</h3>
      <Card>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

// Updated Courses Component
const Courses = ({ courses, onCourseClick }) => (
  <Card>
    <CardHeader>
      <h3 className="text-lg font-semibold">Your Courses</h3>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li
            key={index}
            className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
            onClick={() => onCourseClick(course)}
          >
            <span>{course.name}</span>
            <span className="text-gray-500">{course.progress}%</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// New CourseDialog Component
const CourseDialog = ({ course, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{course?.name}</DialogTitle>
          <DialogDescription>
            Learn more about {course?.name} and track your progress.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Course Content:</h4>
          <ul className="list-disc pl-5">
            <li>Introduction to {course?.name}</li>
            <li>Basic Concepts</li>
            <li>Advanced Topics</li>
            <li>Practical Applications</li>
          </ul>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">
              Your Progress: {course?.progress}%
            </h4>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-full bg-blue-600 rounded"
                style={{ width: `${course?.progress}%` }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Premium Upgrade Component
const PremiumUpgrade = () => (
  <div className="bg-gray-900 text-white p-6 rounded-lg mt-6">
    <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
    <p className="mb-4">
      Get access to exclusive features and content by upgrading to our premium
      plan.
    </p>
    <button className="bg-white text-gray-900 px-4 py-2 rounded-full mt-2">
      Upgrade →
    </button>
  </div>
);

// Dashboard Component
const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    avatar: "https://via.placeholder.com/50",
  });

  const [events] = useState([
    {
      date: "Sept 6",
      attendees: "+5",
      title: "Islamic History Webinar",
      description: "Join us for an insightful webinar on Islamic history.",
    },
    {
      date: "Sept 7",
      attendees: "+10",
      title: "Quran Recitation Competition",
      description: "Participate in our annual Quran recitation competition.",
    },
    {
      date: "Sept 8",
      attendees: "+15",
      title: "Arabic Language Workshop",
      description: "Enhance your Arabic skills in our interactive workshop.",
    },
  ]);

  const [courses] = useState([
    { name: "Quran", progress: 80 },
    { name: "Hadith", progress: 65 },
    { name: "Islamic Etiquette", progress: 50 },
    { name: "Arabic", progress: 40 },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <aside className="w-full sm:w-64 bg-white shadow-md">
        <Sidebar />
      </aside>

      <main className="flex-1 p-4 sm:p-8 overflow-auto">
        <Header user={user} />
        <Banner />
        <Events events={events} />
        <Progress courses={courses} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            <Courses courses={courses} onCourseClick={handleCourseClick} />
          </div>
          <div>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Calendar</h3>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            <PremiumUpgrade />
          </div>
        </div>
      </main>

      <CourseDialog
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
};

export default Dashboard;
