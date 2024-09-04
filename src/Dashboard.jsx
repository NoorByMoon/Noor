/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronRight, LogOut } from "lucide-react";
import logo from "./assets/about (2).png";

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
  <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <div className="relative w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search"
        className="pl-8 pr-4 py-2 rounded-full bg-gray-100 w-full sm:w-64"
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
    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">{event.date}</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {event.attendees}
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
          <p className="text-gray-600">{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Progress Component
const Progress = ({ progress }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Progress</h3>
      <button className="text-blue-500 flex items-center">
        More <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {progress.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">{item.date}</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {item.status}
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.details}</p>
        </div>
      ))}
    </div>
  </div>
);

// Courses Component
const Courses = ({ courses }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Courses</h3>
      <button className="text-blue-500 flex items-center">
        More <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">{course.date}</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {course.level}
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
          <p className="text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
  });

  const events = [
    {
      date: "2024-09-05",
      title: "Event 1",
      description: "Description for event 1",
      attendees: "10",
    },
    {
      date: "2024-09-06",
      title: "Event 2",
      description: "Description for event 2",
      attendees: "15",
    },
  ];

  const progress = [
    {
      date: "2024-09-05",
      title: "Progress 1",
      details: "Details for progress 1",
      status: "Completed",
    },
    {
      date: "2024-09-06",
      title: "Progress 2",
      details: "Details for progress 2",
      status: "In Progress",
    },
  ];

  const courses = [
    {
      date: "2024-09-05",
      title: "Course 1",
      description: "Description for course 1",
      level: "Beginner",
    },
    {
      date: "2024-09-06",
      title: "Course 2",
      description: "Description for course 2",
      level: "Advanced",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 md:w-48 sm:w-40 bg-white shadow-md">
        <Sidebar />
      </aside>
      <main className="flex-1 p-8 sm:p-4 overflow-auto">
        <Header user={user} />
        <Banner />
        <Events events={events} />
        <Progress progress={progress} />
        <Courses courses={courses} />
      </main>
    </div>
  );
};

export default Dashboard;
