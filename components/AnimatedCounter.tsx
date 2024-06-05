
'use client'
 
import React from 'react'

import CountUp from 'react-CountUp'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>

₹<CountUp end =  {amount}/>
    </div>
  )
}

export default AnimatedCounter