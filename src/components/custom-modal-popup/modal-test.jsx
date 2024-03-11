import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      <button onClick={handleTogglePopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          body={<div>Customized body</div>}
          header={<h1>Customized header</h1>}
          footer={<h1>Customized footer</h1>}
          onClose={handleTogglePopup}
        />
      )}
    </div>
  );
}
