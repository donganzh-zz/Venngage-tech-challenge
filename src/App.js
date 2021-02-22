import { DraggableContainer, DraggableChild } from 'react-dragline';
import React from 'react';

const squareChildren = [
  { id: 1, background: '#8ce8df', size: 100,  position: {x: 100, y: 60} },
  { id: 2, background: '#afc7fd', size: 102,  radius: '50%', position: {x: 500, y: 106} },
  { id: 3, background: '#d2aff6', size: 150,  position: {x: 100, y: 316} },
  { id: 4, background: '#add8e6', size: 130,  radius: '50%', position: {x: 300, y: 150} },
]

function App() {
  const containerStyle = {
    position: 'relative',
    height: '600px',
    width: '800px',
    boxShadow: '0 0 5px 1px #CCC inset',

    margin: 20,
  }

  const childStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'move',
  }

  return (
    <div>
      <style>{'.active { opacity: .5; }'}</style>
      <DraggableContainer style={containerStyle}>
        {
          squareChildren.map(({ id, background, size, radius, position}) => (
            <DraggableChild
              key={id}
              defaultPosition={position}
            >
              <div
                className="item"
                style={{
                  ...childStyle,
                  background,
                  width: size,
                  height: size,
                  borderRadius: radius,
                }}
              >
                <span>{id}</span>
              </div>
            </DraggableChild>
          ))
        }
      </DraggableContainer>      
    </div>
  )
}

export default App;