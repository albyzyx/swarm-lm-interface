import React, { useState } from 'react';
import crypto from "crypto";
export const Modal = ({ handleModal, data }) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState(null);  
  const [inputName, setInputName] = useState('');

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  const toggleCardSelection = (index) => {
    setSelectedCard((prevSelected) => (prevSelected === index ? null : index));
    setCardData(data[index]);

  };
  const handleSaveToLocalStorage = () => {
    // Save the selected card data in local storage
    if (cardData && inputName) {
      const bytes = crypto.randomBytes(32);
      const apiKey = Buffer.from(bytes).toString("hex");

     
      const dataToStore = {
        ...cardData,
        apiKey: apiKey,
        inputName: inputName,
      };

      localStorage.setItem('selectedCardData', JSON.stringify(dataToStore));
   
    }
  };
  return (
    <div className="modalContainer">
      <form action='' method='post'>
        <button onClick={() => handleModal()} className='closeBtn'>+</button>

        {/* Input field for the card name */}
        <label htmlFor="cardName">Name:</label>
        <input type="text" id="cardName" name="cardName" className="inputField"  value={inputName}
        onChange={handleInputChange} />


        <label htmlFor="cardName">Available Modals:</label>
        {/* Map over the array of data and create a card for each item */}
        {data.map((cardData, index) => (

<div
key={index}
className={`card ${selectedCard === index ? 'selected' : ''}`}
onClick={() => toggleCardSelection(index)}
>
          <div key={index} >
        
        <div className='cards'>

       
            <h2>Modal Name:</h2>
            <p>{cardData.totalRecords}</p> </div>

            <div className='cards'>
            <h2>Pool Amount:</h2>
            <p>{cardData.price}</p> </div>

            <div className='cards'>
            <h2>GPU Requirement:</h2>
            <p>{cardData.gpu}</p> </div>

          </div>
          </div>
        ))}

        {/* You can add more cards as needed */}

        {/* Submit button (if needed) */}
        <input className='submitBtn' type="submit" value="Submit" onClick={handleSaveToLocalStorage} />
      </form>
    </div>
  );
};
