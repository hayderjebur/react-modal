import { useState } from 'react'
import Modal from './modal/Modal'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  const hideModal = () => {
    setShow(!show)
  }

  return (
    <div className="container">
      react-modal
      <button onClick={() => setShow(true)}>click me</button>
      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
      </Modal>
    </div>
  )
}

export default App
