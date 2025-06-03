import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserProfile } from '../App';

interface RoommateFinderProps {
  userProfile: UserProfile | null;
}

// Mock data for potential roommates
const mockRoommates = [
  {
    id: 1,
    name: 'Rahul Sharma',
    branch: 'Computer Science and Engineering',
    year: '2nd Year',
    sleepSchedule: 'Night Owl',
    cleanlinessLevel: 'high',
    interests: ['Coding', 'Gaming', 'Music'],
    hostelBlock: 'G3',
    compatibility: 85,
  },
  {
    id: 2,
    name: 'Priya Patel',
    branch: 'Electrical Engineering',
    year: '2nd Year',
    sleepSchedule: 'Early Bird',
    cleanlinessLevel: 'medium',
    interests: ['Reading', 'Music', 'Traveling'],
    hostelBlock: 'G3',
    compatibility: 75,
  },
  // Add more mock roommates...
];

const RoommateFinder = ({ userProfile }: RoommateFinderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoommate, setSelectedRoommate] = useState<string | null>(null);

  const handleRequestRoommate = (roommateName: string) => {
    setSelectedRoommate(roommateName);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-iitj-primary dark:text-white mb-8">
          Find Your Perfect Roommate
        </h2>

        {/* Roommate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRoommates.map((roommate) => (
            <motion.div
              key={roommate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {roommate.name}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {roommate.compatibility}% Match
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Branch:</span> {roommate.branch}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Year:</span> {roommate.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Sleep Schedule:</span> {roommate.sleepSchedule}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Cleanliness:</span>{' '}
                    {roommate.cleanlinessLevel.charAt(0).toUpperCase() + roommate.cleanlinessLevel.slice(1)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Hostel Block:</span> {roommate.hostelBlock}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {roommate.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRequestRoommate(roommate.name)}
                  className="w-full bg-iitj-secondary hover:bg-iitj-primary text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Request Roommate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">
                  Request Sent!
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Your roommate request has been sent to {selectedRoommate}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoommateFinder; 