import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-modal"; // Import react-modal
import MYQUIZAImage from "../assets/MYQUIZA-removebg-preview.png";
import Button from "./button";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // Import icons from react-icons
import "../index.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

const AuthentcatedHeader = ({ name, src, alt, email }) => {
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
    console.log("Logged out");
    //Redirecting to the login page after logout
    window.location.href = "/";
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
    color: "white",
  };

  const h2style = {
    marginTop: "3rem",
  };
  const logout = {
    color: "#D01616",
  };

  return (
    <header className="header" style={{ opacity }}>
      <nav className="header-nav">
        <div className="img-ul">
          <div className="img-container">
            <img className="quiz-img" src={MYQUIZAImage} alt="MYQUIZA" />
          </div>

          <div className="ul-container">
            <ul className="header-nav-links">
              <li>
                <Link to="#teachers">For Teachers</Link>
              </li>
              <li>
                <Link to="#students">For students</Link>
              </li>
              <li>
                <Link to="#features">Features</Link>
              </li>
              <li>
                <Link to="#FAQs">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <section className="header-others">
          <Button
            text="Enter Assessment Code"
            onClick={() => {
              window.location.href = "/code";
            }}
            className="btn-assessment"
          />

          <div className="word-container">
            <p>Welcome&#33;</p>
            <p className="name-word">{name}</p>
          </div>

          <div className="profile-dropdown">
            <img
              className="profile-img"
              src={src}
              alt={alt}
              onClick={toggleDropdown}
            />
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
          </div>
        </section>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
        contentLabel="Logout Confirmation Modal"
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
    </header>
  );
};

AuthentcatedHeader.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

AuthentcatedHeader.defaultProps = {
  name: "Sawyer  Ryan",
  src: "https://via.placeholder.com/50?text=G",
  alt: "Guest",
  email: "ryansawyer2019@gmail.com",
};

export default AuthentcatedHeader;
