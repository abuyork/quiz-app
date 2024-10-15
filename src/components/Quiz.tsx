import React, { useState, useEffect } from 'react'
import { Clock, ArrowRight, ArrowLeft, Home, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import questions from '../data/questions'
import { CoolMode } from './ui/cool-mode'
import ShinyButton from './ui/shiny-button'

interface QuizProps {
  onEndQuiz: (score: number) => void
  onHome: () => void
}

const Quiz: React.FC<QuizProps> = ({ onEndQuiz, onHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      handleNext()
    }
  }, [timeLeft])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNext = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setTimeLeft(30)
    }
  }

  const handleFinish = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }
    onEndQuiz(score)
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setTimeLeft(30)
    }
  }

  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="w-full max-w-md flex flex-col items-center space-y-4">
        <motion.div
          className="w-full flex justify-between items-center bg-gray-200 bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg font-semibold text-gray-900">Question {currentQuestion + 1}/{questions.length}</span>
          <span className="flex items-center text-lg font-semibold text-gray-900">
            <Clock className="mr-2 text-blue-300" />
            {timeLeft}s
          </span>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="w-full bg-gray-200 bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">{questions[currentQuestion].question}</h2>
            <div className="space-y-2">
              {questions[currentQuestion].answers.map((answer, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(answer)}
                  className={`w-full text-left p-3 rounded ${
                    selectedAnswer === answer
                      ? 'bg-blue-300 text-gray-900'
                      : 'bg-gray-200 bg-opacity-50 hover:bg-opacity-70 text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {answer}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="w-full flex justify-between items-center mt-8">
          <CoolMode>
            <ShinyButton
              onClick={onHome}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1.5 px-3 rounded-full inline-flex items-center shadow-lg text-xs"
            >
              <span className="flex items-center">
                <Home className="mr-1" size={13} />
                Home
              </span>
            </ShinyButton>
          </CoolMode>
          <div className="flex space-x-2 items-center">
            <ShinyButton
              onClick={handlePrevious}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="flex items-center">
                <ArrowLeft className="mr-1" size={13} />
                Prev
              </span>
            </ShinyButton>
            <ShinyButton
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs"
            >
              <span className="flex items-center">
                Next
                <ArrowRight className="ml-1" size={13} />
              </span>
            </ShinyButton>
            <ShinyButton
              onClick={handleFinish}
              className="bg-green-400 hover:bg-green-700 text-white text-xs"
            >
              <span className="flex items-center">
                Finish
                <CheckCircle className="ml-1" size={13} />
              </span>
            </ShinyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
