import React from 'react';


// function CountDown() {
//     return (
//         <div className="countdown">
//         <h1 className="countdown-header">Our event is ending in :</h1>
//         </div>
//     );
// }

// export default CountDown;

import { useState, useEffect } from 'react';

function CountDown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [eventEnded, setEventEnded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const timeLeft = calculateTimeLeft();
            setTimeLeft(timeLeft);

            if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                setEventEnded(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        const targetDate = new Date('2024-02-13T20:00:00'); // Target date and time
        const now = new Date();
        let difference = targetDate - now;

        if (difference < 0) {
            difference = 0;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    return (
        <div className="countdown">
            {eventEnded ? (
                <div className="event-ended">
                    <p>Event Ended!</p>
                    <p className='thank-you'>THANK YOU ALL FOR ATTENDING!</p>
                </div>
            ) : (
                <>
                    <h1 className="countdown-header">Our event is ending in:</h1>
                    <div className="countdown-timer">
                        {/* <span>{timeLeft.days < 10 ? '0' + } Days</span> */}
                        <span>{timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days} Days</span>
                        <span>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours} Hrs</span>:
                        <span>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes} Mins</span>:
                        <span>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds} Secs</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default CountDown;



