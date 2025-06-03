import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CreateProfileProps {
  setUserProfile: (profile: any) => void;
}

const CreateProfile = ({ setUserProfile }: CreateProfileProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    year: '',
    sleepSchedule: '',
    cleanlinessLevel: 'medium',
    interests: [] as string[],
    hostelBlock: '',
  });

  const branches = [
    'Computer Science and Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const hostelBlocks = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'];
  const interests = ['Music', 'Sports', 'Coding', 'Reading', 'Gaming', 'Movies', 'Traveling', 'Cooking'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile(formData);
    navigate('/find-roommates');
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8"
      >
        <h2 className="text-3xl font-bold text-center text-iitj-primary dark:text-white mb-8">
          Create Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-iitj-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Branch Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Branch
            </label>
            <select
              name="branch"
              required
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-iitj-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Branch</option>
              {branches.map(branch => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Year Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Year
            </label>
            <select
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-iitj-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Sleep Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sleep Schedule
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sleepSchedule"
                  value="Early Bird"
                  checked={formData.sleepSchedule === 'Early Bird'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Early Bird
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sleepSchedule"
                  value="Night Owl"
                  checked={formData.sleepSchedule === 'Night Owl'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Night Owl
              </label>
            </div>
          </div>

          {/* Cleanliness Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cleanliness Level
            </label>
            <input
              type="range"
              name="cleanlinessLevel"
              min="1"
              max="3"
              value={formData.cleanlinessLevel === 'low' ? 1 : formData.cleanlinessLevel === 'medium' ? 2 : 3}
              onChange={(e) => {
                const value = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  cleanlinessLevel: value === '1' ? 'low' : value === '2' ? 'medium' : 'high'
                }));
              }}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Interests
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {interests.map(interest => (
                <motion.button
                  key={interest}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleInterestChange(interest)}
                  className={`p-2 rounded-md text-sm ${
                    formData.interests.includes(interest)
                      ? 'bg-iitj-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {interest}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Hostel Block */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Hostel Block
            </label>
            <select
              name="hostelBlock"
              required
              value={formData.hostelBlock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-iitj-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Hostel Block</option>
              {hostelBlocks.map(block => (
                <option key={block} value={block}>
                  {block}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-iitj-secondary hover:bg-iitj-primary text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg transition-colors duration-300"
          >
            Create Profile
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateProfile; 