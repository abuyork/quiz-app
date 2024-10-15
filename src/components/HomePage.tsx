import React from 'react'
import { Play, Info, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { CoolMode } from './ui/cool-mode'

interface HomePageProps {
  onStartQuiz: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center text-gray-600 max-w-2xl mx-auto relative py-8">
      <motion.h1
        className="text-5xl font-bold mb-6 text-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        Welcome to I-Quiz
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
      >
        Test your intelligence with our fun and challenging IQ questions!
      </motion.p>
      <CoolMode>
        <motion.button
          onClick={onStartQuiz}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center mb-8 shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="mr-2" />
          Start Quiz
        </motion.button>
      </CoolMode>
      <div className="flex flex-col gap-4 mt-8">
        <motion.div
          className="bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center text-gray-800">
            <Info className="mr-2 text-gray-600" />
            How It Works
          </h2>
          <ul className="text-left list-disc list-inside text-gray-700">
            <li>Answer 10 challenging questions</li>
            <li>Questions cover various aspects of intelligence</li>
            <li>Get your IQ estimate instantly</li>
            <li>Compare your score with others</li>
          </ul>
        </motion.div>
        <motion.div
          className="bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center text-gray-800">
            <Trophy className="mr-2 text-gray-600" />
            Leaderboard
          </h2>
          <p className="text-gray-700">Coming soon! Track your progress and compete with others.</p>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-lg text-gray-700">Challenge your mind and discover your potential!</p>
      </motion.div>
      <motion.p
        className="absolute bottom-2 right-2 text-xs opacity-50 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
        © 2024 IQ Quiz Challenge. All rights reserved.
      </motion.p>
    </div>
  )
}

export default HomePage
