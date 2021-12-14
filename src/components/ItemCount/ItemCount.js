import React, {useState} from 'react'
import PropTypes  from 'prop-types'



const ItemCount=({ value })=>{
    
    const [counter, setCounter] = useState(value);
    

    const handleAdd = () =>{
        setCounter(counter+1)
    }
    const handleReset = () => setCounter (value)
    const handleSustract = () => setCounter (counter-1)
   
    return (
        <>
          <h1>CounterApp </h1>
          <h2>{counter}</h2>
          
          <button onClick={handleAdd} >+1</button>
          <button onClick ={handleReset}>Reset</button>
          <button onClick ={handleSustract}>-1</button>

        </>
    )
    

}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;