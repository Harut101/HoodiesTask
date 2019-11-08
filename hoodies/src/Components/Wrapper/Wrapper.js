import React from 'react';
import '../Wrapper/Wrapper.css';
import {useSpring, animated} from 'react-spring'

function Wrapper(props) {
  const { x } = useSpring({ from: { x: 0 }, x: props.animateState ? 1 : 0, config: { duration: 1000 } })
  
  const state = props.touched && !props.state ? 'error' : ''

  return (
    <animated.div className={`Wrapper ${state}`} 
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}> 
      {props.children}
    </animated.div>
  );
}

export default Wrapper;