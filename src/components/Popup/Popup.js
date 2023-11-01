import './Popup.css';

function Popup({isOpen, children}) {
    return (
    <section className={`popup ${isOpen ? 'popup_is_opened' : ''}`} >
          {children}
    </section>
  );
}

export default Popup;