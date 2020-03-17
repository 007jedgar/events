import React, {useEffect} from 'react'
import './../App.css';


function Home() {

  useEffect(() => {
    toRomanNumerals(5)
  }, [])

  function toRomanNumerals(num) {
    let numerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }

    let values = Object.values(numerals)
    let keys = Object.keys(numerals)

    values.forEach((value, i) => {
      if (value===num) {
        return console.log(keys[i])
      }
    })
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;