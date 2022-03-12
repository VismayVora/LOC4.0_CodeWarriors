import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
	const Ref = useRef(null);

	const [timer, setTimer] = useState("");

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : "0" + hours) +
					":" +
					(minutes > 9 ? minutes : "0" + minutes) +
					":" +
					(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};

	const clearTimer = (e) => {
		setTimer("00:01:00");

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 60);
		return deadline;
	};

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

	return (
		<div className="Timer">
			<h2>{timer}</h2>
			<button onClick={onClickReset}>Start</button>
		</div>
	);
};

export default Timer;



// import React from 'react'

// const Timer = ({hoursMinSecs}) => {
   
//     const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
//     const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

//     const tick = () => {
   
//         if (hrs === 0 && mins === 0 && secs === 0) 
//             reset()
//         else if (mins === 0 && secs === 0) {
//             setTime([hrs - 1, 59, 59]);
//         } else if (secs === 0) {
//             setTime([hrs, mins - 1, 59]);
//         } else {
//             setTime([hrs, mins, secs - 1]);
//         }
//     };


//     const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
//     React.useEffect(() => {
//         const timerId = setInterval(() => tick(), 1000);
//         return () => clearInterval(timerId);
//     });

    
//     return (
//         <div>
//             <p>{`${hrs.toString().padStart(2, '0')}:${mins
//             .toString()
//             .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
//         </div>
//     );
// }

// export default Timer;
