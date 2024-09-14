import React, { useState } from 'react'
import './Styles.css'
const Counter = () => {


    const [data,setData] = useState(0)

    const handleClick = (number)=>{
                if(number == "dec")
                {
                    setData(data -1)
                }

                else if(number == 'reset'){
                    setData(0)
                }
                else{
                    setData(data + 1)
                }
    }



  return (
   <>
   
        <div className="container mx-auto p-5 text-center">
            <div className={`display-2 ${data > 0 ? 'text-success': 'text-danger'} 
            ${data == 0 && 'yellow'}
            
            ` }>{data}</div>
            <button onClick={() => handleClick('dec')}  className="btn btn-danger mx-2">Decrease</button>
            <button onClick={() => handleClick('reset') } className="btn btn-warning mx-2">Reset</button>
            <button  onClick={() => handleClick('increase')}  className="btn btn-success mx-2">Increase</button>
        </div>

   </>
  )
}

export default Counter