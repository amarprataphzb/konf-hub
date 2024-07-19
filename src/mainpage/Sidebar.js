import React, { useEffect, useState } from 'react'
import './sidebar.css'
  
const Sidebar = (props) => {

    const data=props.data
    const calculateTimeLeft = () => {
        const eventDate = new Date("July 31, 2034 06:00:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span key={interval} className="timer-part">
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
  return (
    <div className='sidebar-container'>
<h2 className="event-title">{data?.name}</h2>
      <p className="event-details"><span role="img" aria-label="online">📹</span> Online <span role="img" aria-label="paid">💳</span> Paid</p>
      <p className="event-link">Event Live Link : <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Open streaming website</a></p>
      <p className="event-date">Date: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>
      <p className="event-timer">Event starts in: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
      <button className="event-button" onClick={() => window.location.href = 'https://www.example.com/buy'}>Buy Now</button>
      <button className="event-button" onClick={() => window.location.href = 'https://www.example.com'}>Official Website</button>
    </div>
  )
}

export default Sidebar