import MYQUIZAImage from "../assets/MYQUIZA-removebg-preview.png";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // Import the icons from react-icons
import Modal from "react-modal"; // Import react-modal
import "../index.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

const FeedbackHeader = ({ name, src, alt, email }) => {
  const [opacity, setOpacity] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.6);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogOutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogOut = () => {
    setIsModalOpen(false);
    window.location.href = "/";
    console.log("Logged out");
  };
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      paddingLeft: "2.4rem",
      width: "25rem",
      height: "15rem",
      borderRadius: "8px",
      fontSize: "0.85rem",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  const modalButtonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    marginRight: "1rem",
  };

  const modalButtonStyle = {
    margin: "5px",
    padding: "10px 20px",
    border: "none",
    width: "9.5rem",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f1f1f1",
    color: "#4A2999",
  };

  const modalButtonStyle2 = {
    margin: "5px",
    padding: "10px 20px",
    border: "none",
    width: "9.5rem",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#D01616",
    color: "#fff",
  };

  const h2style = {
    marginTop: "3rem",
  };
  const logout = {
    color: "#D01616",
  };

  return (
    <header
      className="header header-enter-code"
      style={{ opacity, backgroundColor: "#4A2999" }}
    >
      <div className="img-container">
        <img className="quiz-img" src={MYQUIZAImage} alt="MYQUIZA" />
      </div>

      <section className="header-others">
        <img
          className="profile-img"
          src={src}
          alt={alt}
          onClick={toggleDropdown}
        />
        <p>{name}</p>

        {dropdownVisible && (
          <div className="dropdown-content">
            <div className="dropdown-header">
              <img className="profile-img-dropdown" src={src} alt={alt} />
              <div>
                <p>{name}</p>
                <p className="email">{email}</p>
              </div>
            </div>
            <hr />
            <div className="dropdown-item">
              <FaUser className="icon" />
              <span>Profile Settings</span>
            </div>
            <div className="dropdown-item" onClick={handleLogOutClick}>
              <FaSignOutAlt className="icon2" />
              <span style={logout}>Log Out</span>
            </div>
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={modalStyles}
          contentLabel="Confirmation Modal"
        >
          <h2 style={h2style}>Are you sure you want to log out?</h2>
          <div style={modalButtonContainerStyle}>
            <button style={modalButtonStyle} onClick={handleCloseModal}>
              Cancel
            </button>
            <button style={modalButtonStyle2} onClick={handleConfirmLogOut}>
              Log Out
            </button>
          </div>
        </Modal>
      </section>
    </header>
  );
};

FeedbackHeader.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

FeedbackHeader.defaultProps = {
  name: "Sawyer  Ryan",
  src: "https://via.placeholder.com/50?text=G",
  alt: "Guest",
  email: "ryansawyer2019@gmail.com",
};

export default FeedbackHeader;
