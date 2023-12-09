import React from 'react';

export const Modal = ({ handleModal, data }) => {
  return (
    <div className="modalContainer">
      <form action='' method='post'>
        <button onClick={() => handleModal()} className='closeBtn'>+</button>

        {/* Input field for the card name */}
        <label htmlFor="cardName">Name:</label>
        <input type="text" id="cardName" name="cardName" className="inputField" />


        <label htmlFor="cardName">Available Modals:</label>
        {/* Map over the array of data and create a card for each item */}
        {data.map((cardData, index) => (
          <div key={index} className="card">
        
            <h2>Total Records</h2>
            <p>{cardData.totalRecords}</p>

            <h2>Price</h2>
            <p>{cardData.price}</p>

            <h2>GPU</h2>
            <p>{cardData.gpu}</p>
          </div>
        ))}

        {/* You can add more cards as needed */}

        {/* Submit button (if needed) */}
        <input className='submitBtn' type="submit" value="Submit" />
      </form>
    </div>
  );
};
