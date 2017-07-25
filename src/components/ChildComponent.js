import React from 'react';

export default function ChildComponent(props) {
  return (
    <div>
      <input type="submit" onClick={ props.onClick }/>
    </div>
  )
}
