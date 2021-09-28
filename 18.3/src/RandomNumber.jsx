import { useEffect, useState } from 'react';

const TEN_SECONDS = 3000;
const FOUR_SECONDS = 1000;

function RandomNumber() {
  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber1to100());
  const [isDivisible, setIsDivisible] = useState(true);

  function generateRandomNumber1to100() {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNumber(generateRandomNumber1to100());
    }, TEN_SECONDS );

    return () => {
      clearInterval(timer);
    }
  },[]);

  function checkDivisibily(number) {
    return number % 3 === 0 || number % 5 === 0;
  }

  useEffect(()=> {
    let msg;
    if(checkDivisibily(currentNumber)){
      setIsDivisible(true);
      msg = setTimeout(() => {
        setIsDivisible(false);
      }, FOUR_SECONDS);
    } else{
      setIsDivisible(false);
    }

    return () => {
      clearTimeout(msg);
    }
  },[currentNumber])



  return (
    <>
      <h1>{ currentNumber }</h1>
      <h1>{ isDivisible ? "ACERTOU" : ""}</h1>
    </>
  );
}

export default RandomNumber;