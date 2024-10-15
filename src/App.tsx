import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomePage from './components/HomePage'
import Quiz from './components/Quiz'
import Results from './components/Results'
import RetroGrid from './components/ui/retro-grid'

function App() {
  const [quizState, setQuizState] = useState('home'); // 'home', 'quiz', or 'results'
  const [quizResults, setQuizResults] = useState<number | null>(null);

  const handleStartQuiz = () => {
    setQuizState('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setQuizResults(score);
    setQuizState('results');
  };

  const handleReturnHome = () => {
    setQuizState('home');
    setQuizResults(null);
  };

  const handleRetry = () => {
    setQuizState('quiz');
    setQuizResults(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 z-[-1]">
        <RetroGrid className="opacity-50" angle={65} />
      </div>
      <main className="relative z-10 w-full max-w-4xl px-4 py-8 flex items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {quizState === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <HomePage onStartQuiz={handleStartQuiz} />
            </motion.div>
          )}
          {quizState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <Quiz onEndQuiz={handleQuizComplete} onHome={handleReturnHome} />
            </motion.div>
          )}
          {quizState === 'results' && quizResults !== null && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <Results score={quizResults} onRetry={handleRetry} onHome={handleReturnHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App
