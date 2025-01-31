import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ValentineProposal = () => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="valentine-container">
      {/* Floating Hearts & Roses */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
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
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            {Math.random() > 0.5 ? '❤️' : '🌹'}
          </motion.div>
        ))}
      </div>
      
      <div className="proposal-box text-center p-4">
        <motion.h1 
          className="text-danger mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Will you be my Valentine? 💖
        </motion.h1>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <motion.button
            className="btn btn-danger pulse"
            onClick={() => setShowLetter(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes, Forever! 😍
          </motion.button>
        </div>
      </div>
      
      {/* Love Letter with Opening Animation */}
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
            <h2>My Dearest Love, 💌</h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              From the moment I met you, my world became brighter, my heart fuller, and my life happier. 🌟
              Your smile lights up my day, and your love completes me in ways I never imagined possible.
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              You're my everything - my best friend, my partner, and my greatest adventure. 🌈
              Every moment with you is precious, and I cherish the love we share more than words can express.
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4"
            >
              <strong>Yours now and always, 💑<br/>Your Loving Valentine 💘</strong>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ValentineProposal;