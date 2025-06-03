import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-20"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to IITJ Roommate Finder</h1>
        <p className="text-lg mb-8">Find your perfect roommate at IIT Jodhpur</p>
        <Link to="/profile">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow p-6 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
          <p>Customize your roommate preferences easily.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Find Matches</h3>
          <p>Discover compatible roommates based on your habits.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow p-6 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p>Send roommate requests and start chatting.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;