import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

const SalesCountdownTimer = () => {
  const calculateTimeLeft = () => {
    const saleEndDate = new Date("2024-01-03T23:59:59");  
    const difference = saleEndDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (

    <div className="sales-countdown-timer">
        <h1 className='heading'>Count Down Timer</h1>
      
      <div className="timer-display">
        
          <h2>{formatTime(timeLeft.days)}days</h2> 
        
        
          <h2>{formatTime(timeLeft.hours)}hours</h2> 
       
        
          <h2>{formatTime(timeLeft.minutes)}minutes</h2> 
       
        
          <h2>{formatTime(timeLeft.seconds)}seconds</h2> 
       
      </div>
      
   
    </div>
  );
};

export default SalesCountdownTimer;