import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractWrite } from "wagmi";
import { parseEther } from "viem";

const slmAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const Modal = ({ handleModal, data }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputCredit, setinputCredit] = useState("0");

  const {
    dataW = data,
    isLoading,
    isSuccess,
    write,
  } = useContractWrite({
    address: "0x6D73751a7De0E2072Fa07e0400af8763a224530B",
    abi: slmAbi,
    functionName: "approve",
  });

  const account = useAccount();

  console.log({ account: account.isConnected });

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };
  const handleInputChangeCredit = (event) => {
    setinputCredit(event.target.value);
  };

  //   const approve = () => {
  // useContractWrite
  //     const slmTokenContract =

  //   };

  const toggleCardSelection = (index) => {
    setSelectedCard((prevSelected) => (prevSelected === index ? null : index));
    setCardData(data[index]);
  };
  const handleSaveToLocalStorage = (e) => {
    e.preventDefault();
    // Save the selected card data in local storage
    if (cardData && inputName) {
      const apiKey = (Math.random() + 1).toString(36).substring(18);

      const dataToStore = {
        ...cardData,
        apiKey: apiKey,
        inputName: inputName,
      };
      const previousData = JSON.parse(
        localStorage.getItem("selectedCardData") || "[]"
      );
      localStorage.setItem(
        "selectedCardData",
        JSON.stringify([...previousData, dataToStore])
      );
    }
    write({
      args: [
        "0x1b1a2A4276E73c074134bB01069F16F44fA6049e",
        parseEther(inputCredit),
      ],
    });
    handleModal();
  };
  return (
    <div className="modalContainer">
      <form action="" method="post">
        <button onClick={() => handleModal()} className="closeBtn">
          +
        </button>

        {/* Input field for the card name */}
        <label htmlFor="cardName">Name:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          className="inputField"
          value={inputName}
          onChange={handleInputChange}
        />

        {/* Input field for the card name */}
        <label htmlFor="cardName">Credit:</label>
        <input
          type="number"
          id="cardCredit"
          name="cardCredit"
          className="inputField"
          value={inputCredit}
          onChange={handleInputChangeCredit}
        />

        <label htmlFor="cardName">Available Modals:</label>
        {/* Map over the array of data and create a card for each item */}
        {data.map((cardData, index) => (
          <div
            key={index}
            className={`card ${selectedCard === index ? "selected" : ""}`}
            onClick={() => toggleCardSelection(index)}
          >
            <div key={index}>
              <div className="cards">
                <h2>Modal Name:</h2>
                <p>{cardData.totalRecords}</p>{" "}
              </div>

              <div className="cards">
                <h2>Pool Amount:</h2>
                <p>{cardData.price}</p>{" "}
              </div>

              <div className="cards">
                <h2>GPU Requirement:</h2>
                <p>{cardData.gpu}</p>{" "}
              </div>
            </div>
          </div>
        ))}

        {/* You can add more cards as needed */}

        {/* Submit button (if needed) */}
        <ConnectButton />
        {account.isConnected && (
          <input
            className="submitBtn"
            type="submit"
            value="Approve"
            onClick={handleSaveToLocalStorage}
          />
        )}
      </form>
    </div>
  );
};
