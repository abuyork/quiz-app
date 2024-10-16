import React, { useEffect, useRef } from 'react'
import { Repeat, Home, Share2, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import ShinyButton from './ui/shiny-button'
import Confetti, { ConfettiRef } from './ui/confetti'

interface ResultsProps {
  score: number
  onRetry: () => void
  onHome: () => void
}

const Results: React.FC<ResultsProps> = ({ score, onRetry, onHome }) => {
  const totalQuestions = 15
  const percentage = (score / totalQuestions) * 100
  const iqEstimate = Math.round(80 + (score / totalQuestions) * 40)
  const confettiRef = useRef<ConfettiRef>(null)

  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current.fire({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }, [])

  return (
    <div className="max-w-md mx-auto text-center text-white relative">
      <Confetti ref={confettiRef} />
      <motion.h2
        className="text-4xl font-bold mb-6 text-gray-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Natija
      </motion.h2>
      <motion.div
        className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-xl mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="text-6xl font-bold mb-4 text-yellow-300"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Award />
        </motion.div>
        <p className="text-2xl mb-2">Sizni Natijangiz: {score}/{totalQuestions}</p>
        <p className="text-xl mb-4">Foiz Miqdori: {percentage.toFixed(1)}%</p>
        
        <p className="text-sm text-gray-300">
          Eslatma: Bu test sizni HTML va CSS bilimingizni ehtimoliy darjangizni aniqlab beradi.
        </p>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
        <ShinyButton onClick={onRetry} className="bg-blue-300 text-white w-full sm:w-auto">
          <span className="flex items-center justify-center text-sm">
            <Repeat className="mr-1" size={16} />
            Retry
          </span>
        </ShinyButton>
        <ShinyButton onClick={onHome} className="bg-gray-400 text-white w-full sm:w-auto">
          <span className="flex items-center justify-center text-sm">
            <Home className="mr-1" size={16} />
            Home
          </span>
        </ShinyButton>
        <ShinyButton
          onClick={() => alert('Ulashish funksiyasi tez orada!')}
          className="bg-green-400 text-white w-full sm:w-auto"
        >
          <span className="flex items-center justify-center text-sm">
            <Share2 className="mr-1" size={16} />
            Share
          </span>
        </ShinyButton>
      </div>
    </div>
  )
}

export default Results
