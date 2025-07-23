import React from 'react'
import Left from './home/left/left';
import Right from './home/right/right';

function App() {
  return ( 
    <div>
      <>
      <div className='flex h-screen'>
         <Left></Left>
      <Right></Right>
      </div>
      </>
    </div> 
  )
}

export default App;
