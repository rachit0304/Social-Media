import React from 'react'

const Welcome = ({onFetch}) => {
  return (
    <div>
      <center><h2>There are no posts available</h2>
      <button onClick={onFetch}>Fetch Posts From Server</button>
      </center>
    </div>
  )
}

export default Welcome
