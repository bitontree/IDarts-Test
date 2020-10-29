import React from 'react'
import { Button } from 'reactstrap'

const ActionButtons = () => {
  return (
    <div className="action-buttons d-flex flex-column justify-content-around align-items-center card">
      <Button className="w-75 w-md-25 px-1" outline color="danger">BUY</Button>
      <Button className="w-75 w-md-25 px-1" outline color="danger">SELL</Button>
    </div>
  )
}

export default ActionButtons;
