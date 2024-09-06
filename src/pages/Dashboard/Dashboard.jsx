import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronRight, LogOut } from "lucide-react";
import logo from "../../assets/logo (2).png";

// Sidebar Component
const Sidebar = () => (
  <div className="bg-white p-4 flex flex-col h-full">
    <div className="mb-8">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-8 self-start mb-8" />
      </Link>
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
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-8 pr-4 py-2 rounded-full bg-gray-100"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div className="flex items-center space-x-4">
      <Bell className="h-6 w-6 text-gray-500" />
      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">{event.date}</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {event.attendees}
            </span>
          </div>
          <h4 className="font-semibold">{event.title}</h4>
          <p className="text-gray-500 text-sm">{event.time}</p>
        </div>
      ))}
    </div>
  </div>
);

// Progress Component
const Progress = ({ courses }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Timing & progress</h3>
      <button className="text-blue-500 flex items-center">
        More <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Placeholder for chart */}
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        {courses.map((course, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <span>{course.name}</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Courses Component
const Courses = ({ courses }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Your Courses</h3>
      <button className="text-blue-500 flex items-center">
        More <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="space-y-2">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for course icon */}
            </div>
            <span>{course.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">{course.hours} hours</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Premium Upgrade Component
const PremiumUpgrade = () => (
  <div className="bg-gray-900 text-white p-6 rounded-lg mt-6">
    <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
    <button className="bg-white text-gray-900 px-4 py-2 rounded-full mt-2">
      Upgrade →
    </button>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [user] = useState({
    name: "Kate G.",
    avatar: "/api/placeholder/32/32",
  });

  const [events] = useState([
    { date: "26.02", time: "14:00 - 15:30", title: "Quran", attendees: "+20" },
    { date: "02.03", time: "10:00 - 11:30", title: "Arabic", attendees: "+12" },
    { date: "07.03", time: "13:00 - 14:30", title: "Hadith", attendees: "+64" },
  ]);

  const [courses] = useState([
    { name: "Quran", hours: 35 },
    { name: "Hadith", hours: 40 },
    { name: "Islamic Etiqutte", hours: 25 },
  ]);

  const [progress] = useState([
    { name: "Quran", progress: 37 },
    { name: "Hadith", progress: 83 },
    { name: "Arabic", progress: 51 },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <Sidebar />
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Header user={user} />
        <Banner />
        <Events events={events} />
        <Progress courses={progress} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Courses courses={courses} />
          </div>
          <div>
            <PremiumUpgrade />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
