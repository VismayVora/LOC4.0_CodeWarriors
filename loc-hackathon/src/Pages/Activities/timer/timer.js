import './Timer.css';
import CountDownTimer from './CountDownTimer';
function Timers() {

    const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  return (
    <div className="Timer">
        <div>
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
        </div>
    </div>
  );
}

export default Timers;