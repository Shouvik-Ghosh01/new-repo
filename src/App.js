import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="thankyou-container">
      {/* Floating Happy Black Cats */}
      <div className="floating-cats">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="cat"
            initial={{ opacity: 0 }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 100 - 50],
              opacity: [1, 0],
              rotate: [0, Math.random() * 360],
              scale: [0.8, 1.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${30 + Math.random() * 20}px`
            }}
          >
            🐱
          </motion.div>
        ))}
      </div>

      {/* Main Message Box */}
      <div className="message-box text-center p-4">
        <motion.h1 
          className="text-primary mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Thank you Shradhha for being the best date that I’ve been with after coming here. 🖤
        </motion.h1>
        <p className="text-muted">
          You’re cute, funny, and sexy! 🚁🚁
        </p>

        {/* 🖼️ Add Cute Black Cat GIF Here */}
        <img 
          src="https://png.pngtree.com/recommend-works/png-clipart/20250104/ourmid/pngtree-a-cute-little-black-cat-png-image_15047201.png" 
          alt="Cute Black Cat"
          className="black-cat-gif"
        />

        <div className="d-flex justify-content-center gap-3 mt-3">
          <motion.button
            className="btn btn-dark pulse"
            onClick={() => setShowLetter(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More 💌
          </motion.button>
        </div>
      </div>

      {/* Love Letter Animation */}
      {showLetter && (
        <motion.div
          className="love-letter p-4 mt-4 text-center"
          initial={{ rotateX: 90, scale: 0.5, opacity: 0 }}
          animate={{ 
            rotateX: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8
            }
          }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div
            className="letter-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.4 }
            }}
          >
            <h2>Dear Cutiee, 💌</h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I'm not so good with words but still I would like to express myself through this. ❤️
              Thank you for being so sweet and funny and yeah most importantly comfortable around me. I love your company. 
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              Whether it's your cute little jokes or the way you make everything more fun, I'm just so glad to have you around. You've become one of my favorite person here. Hope we met earlier but yeah hopefully we'll know each other for a long time now and yeah thank you so much for the macroni. 
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4"
            >
              <strong>Yours Pie</strong>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
