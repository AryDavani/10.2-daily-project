import React from 'react';

export default function ChildComponent() {
  return (
    <div>
      <input type="submit" onClick={this.props.onClick}/>
    </div>
  )
}
