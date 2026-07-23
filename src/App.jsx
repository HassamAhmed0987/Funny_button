import { useState } from 'react'
import './App.css'







function App() {

  const buttonText = [
    "Don't Click Me 😒",
    "I Said Don't Click! 😑",
    "Seriously... Stop 😤",
    "Why Are You Still Clicking? 🤨",
    "Last Warning! ⚠️",
    "You're Asking For It 😈",
    "Too Late... 💀"
  ];




  let [index, setIndex] = useState(0)
  const [shake, setShake] = useState(false);
  const [blast, setBlast] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [gameOver, setGameOver] = useState(false);






  // const handleClick = () => {
  //   if (index < buttonText.length - 1) {
  //     setIndex(index + 1)
  //   } else {
  //     setShake(true)
  //     setTimeout(() => {
  //       setBlast(true);
  //       setShake(false);

  //       setTimeout(() => {
  //         setShowButton(false)
  //         setGameOver(true)
  //       }, 1000)

  //     }, 2000);
  //   }
  // }

  const handleClick = () => {
  if (index < buttonText.length - 1) {
    const nextIndex = index + 1;
    setIndex(nextIndex);

    if (nextIndex === buttonText.length - 1) {
      setShake(true);

      setTimeout(() => {
        setBlast(true);
        setShake(false);

        setTimeout(() => {
          setShowButton(false);
          setGameOver(true);
        }, 1000);
      }, 2000);
    }
  }
};











  return (
    <div className={`h-[100vh] flex justify-center items-center transition-all duration-1000  ${gameOver ? "bg-black" : "bg-blue-950"}`}>
      {showButton && (
        <button
          className={`bg-blue-700 p-2 font-semibold rounded-md shadow shadow-[0_0_50px_0_rgba(0,0,0,1)] ${shake ? "shake" : ""} ${blast ? "blast" : ""}`}
          onClick={handleClick}
        >
          {buttonText[index]}
        </button>
      )}

      {gameOver && (
        <div className='text-center'>
          <h1 className="text-red-600 text-5xl font-bold animate-pulse">
            IT'S TIME TO KILL YOU ☠️
            
          </h1>
          <p className="text-white text-xl mt-4 animate-pulse">
            You ignored every warning...
          </p>
        </div>
      )}
    </div>
  )

}

export default App
