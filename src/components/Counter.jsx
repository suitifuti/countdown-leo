import {useState} from 'react'
import SpanClock from "./SpanClock";
import SmallText from "./SmallText";

const Counter = () => {
    const [count, setCount] = useState(
   {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
   }
  )

  let countDownDate = new Date("Aug 15, 2025 00:00:00").getTime();

  const time = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCount({days: days, hours: hours, minutes: minutes, seconds: seconds})

  }, 1000);

  return (
    <>
    <div className="text-6xl not-purple text-center grid grid-cols-4 gap-2 py-10 w-120 mx-auto font-extrabold"><SpanClock>{count.days} <SmallText>days</SmallText></SpanClock> <SpanClock>{count.hours} <SmallText>hours</SmallText></SpanClock> <SpanClock>{count.minutes} <SmallText>minutes</SmallText></SpanClock> <SpanClock>{count.seconds} <SmallText>seconds</SmallText></SpanClock></div>
    </>
    
  )
}

export default Counter