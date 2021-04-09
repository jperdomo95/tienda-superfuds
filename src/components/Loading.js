import ReactDOM from 'react-dom'
import '../styles/Loading.sass'

function Loading ({ isOpen  }) {

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
        <div className="position-fixed top-0 bottom-0 start-0 end-0 bg-modal d-flex justify-content-center align-items-center">
          <div>
            <div className="spinner-grow spinner-lg">
            </div>
          </div>
        </div>,
        document.getElementById('loading')
      )
}

export default Loading