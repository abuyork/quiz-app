import React from 'react'
import { Play, Info, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { CoolMode } from './ui/cool-mode'
import Card from './ui/ui-card'

interface HomePageProps {
  onStartQuiz: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center text-gray-600 max-w-4xl mx-auto relative py-8">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        Devex Academy
        <br />
        <span className="text-3xl sm:text-4xl">HTML va CSS Imtihon!</span>
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
      >
        Savollarga anqilik bilan javob berib, o'z bilimingizni sinab ko'ring !
      </motion.p>
      <div className="flex justify-center space-x-4 mb-8">
        <CoolMode>
          <motion.button
            onClick={onStartQuiz}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="mr-2" />
            HTML va CSS Nazariy
          </motion.button>
        </CoolMode>
        <CoolMode>
          <motion.a
            href="https://flexboxfroggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="mr-2" />
            CSS - Amaliy
          </motion.a>
        </CoolMode>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card title="Qo'llanma" icon={<Info className="text-gray-600" />} type="instructions">
            <ul className="list-disc list-inside text-sm text-left">
              <li>15 ta savolga javob bering</li>
              <li>HTML, CSS bilimingiz aniqlanadi</li>
              <li>Har savolga 4 daqiqa</li>
              <li>Natija imtihon so'ngida</li>
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card title="Baholash Me'zoni" icon={<Trophy className="text-gray-600" />} type="criteria">
            <div className="text-sm">
              <p className="font-semibold mb-2">14-15 - A'lo</p>
              <p className="font-semibold mb-2">11-13 - Yaxshi</p>
              <p className="font-semibold">5-10 - Qoniqarsiz</p>
            </div>
          </Card>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
     
      </motion.div>
      <motion.p
        className="absolute bottom-2 right-2 text-xs opacity-50 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
      </motion.p>
    </div>
  )
}

export default HomePage
