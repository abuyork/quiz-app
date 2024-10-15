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
  const totalQuestions = 10
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
        Quiz Results
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
        <p className="text-2xl mb-2">Your Score: {score}/{totalQuestions}</p>
        <p className="text-xl mb-4">Percentage: {percentage.toFixed(1)}%</p>
        <p className="text-3xl font-semibold mb-2">Estimated IQ: {iqEstimate}</p>
        <p className="text-sm text-gray-300">
          Note: This is a rough estimate and not a substitute for a professional IQ test.
        </p>
      </motion.div>
      <div className="flex justify-center space-x-2">
        <ShinyButton onClick={onRetry} className="bg-blue-300 text-white flex-1">
          <span className="flex items-center justify-center">
            <Repeat className="mr-1" size={14} />
            Retry
          </span>
        </ShinyButton>
        <ShinyButton onClick={onHome} className="bg-gray-400 text-white flex-1">
          <span className="flex items-center justify-center">
            <Home className="mr-1" size={14} />
            Home
          </span>
        </ShinyButton>
        <ShinyButton
          onClick={() => alert('Sharing functionality coming soon!')}
          className="bg-green-400 text-white flex-1"
        >
          <span className="flex items-center justify-center">
            <Share2 className="mr-1" size={14} />
            Share
          </span>
        </ShinyButton>
      </div>
    </div>
  )
}

export default Results
