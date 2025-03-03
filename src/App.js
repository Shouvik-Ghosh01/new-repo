import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const ThankYouShradhha = () => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="thankyou-container">
      {/* Floating Happy Cat Animation */}
      <div className="floating-cat">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="cat"
            initial={{ opacity: 0 }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 100 - 50],
              opacity: [1, 0],
              rotate: [0, Math.random() * 20 - 10],
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
              fontSize: `${40 + Math.random() * 20}px`
            }}
          >
            🐱
          </motion.div>
        ))}
      </div>
      
      <div className="message-box text-center p-4">
        <motion.h1 
          className="text-dark mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Thank you, Shradhha, for being cute, funny, and sexy! 😻
        </motion.h1>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <motion.button
            className="btn btn-dark pulse"
            onClick={() => setShowLetter(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Read My Letter 💌
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
            <h2>Dear Shradhha, 💌</h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Since the moment I met you, you've been the highlight of my days. 🌟
              You're my adorable, mischievous, and incredibly charming black cat in human form. 😻
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              Thank you for being the most amazing person I could have asked for. You're the best date I've had since coming here, and I can't wait for more moments with you. 💕
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-4"
            >
              <strong>Yours, now and always,<br/>Your Favorite Date 💖</strong>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ThankYouShradhha;
