import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {/* <button type='button' onClick={handleClose}>
          Close
        </button> */}
        <span onClick={handleClose} aria-hidden="true">&times;</span>
        {children}

      </section>
    </div>
  );
};
export default Modal;
