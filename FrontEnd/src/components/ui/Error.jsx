import React from 'react'

const Error = ({error}) => {
  return (
    <div className="alert alert-danger my-5" role="alert" style={{textAlign: "center"}}>
  {error}
  
</div>
  )
}

export default Error