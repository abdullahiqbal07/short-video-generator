import React from 'react'
import { AbsoluteFill } from 'remotion'

function RemotionComposition() {
  return (
    <AbsoluteFill  style={{
        color: 'white',
        backgroundColor: 'black',
        border: '1px',
    }}>
    <div>Hello world</div>
    </AbsoluteFill>
  )
}

export default RemotionComposition