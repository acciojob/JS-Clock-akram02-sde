//your code here
const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
	// getting the whole date including time 
    const now = new Date();
    
// extracting time from the date 
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
	
    const hour = now.getHours();
  console.log("cur",hour, mins, seconds)
	// setting time into degree to rotate hand to 
	//  5:30:20
	// 5*30 + 30/2 = 165min
	const hourDegrees = (30*hour)+mins/2;
	const minDegree =6*mins;
	const secondDegree =6*seconds;
  console.log("Degrees",hourDegrees, minDegree, secondDegree)

	// hourHand.addEventListener()
	hourHand.style.transform = `rotate(${hourDegrees +90 }deg)`
	minsHand.style.transform = `rotate(${minDegree +90}deg)`
	secondsHand.style.transform = `rotate(${secondDegree +90}deg)`
	
}

setInterval(setTime, 1000)