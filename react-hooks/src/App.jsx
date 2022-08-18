import React from 'react'
import StateHooks from './StateHooks';
import EffectHook from './EffectHook';
import Test from './Test';
import RefHook from './RefHook';
import Post from './Post';
const App = () => {
  return (
   <>
   <h1>HELLO WORLD</h1>
    <StateHooks />
    <EffectHook />
    {/* <Test /> */}
    <RefHook />
    <Post />

   </>
  )
}

export default App
