import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";

function AddAPI() {
  const [isModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(false);
  };
  const modalData = [
    {
      totalRecords: "Llama 2 (70B)",
      price: "$500",
      gpu: "NVIDIA GeForce RTX 3080",
    },
    {
      totalRecords: "Falcon (40B+)",
      price: "$700",
      gpu: "AMD Radeon RX 6700 XT",
    },
    {
      totalRecords: "BLOOM (176B)",
      price: "$900",
      gpu: "NVIDIA GeForce GTX 1660 Ti",
    },
    // Add more items as needed
  ];
  return (
    <>
      {isModal ? (
        <Modal handleModal={() => handleModal()} data={modalData} />
      ) : (
        ""
      )}
      <div className="addAPIContainer">
        <button className="formBtn" onClick={() => setModal(true)}>
          Add APIKEY
        </button>
      </div>
    </>
  );
}

export default AddAPI;
