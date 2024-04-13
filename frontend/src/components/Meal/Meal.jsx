import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import for routing

const CardList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1212/'); // Replace with your API URL
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (cardData) => {
    // Navigate to the details page, passing the card data as props
    <Link to={`/card-details/${cardData.id}`}>Details</Link>; // Example using react-router-dom
  };

  return (
    <div className="card-container">
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        data.map((card, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(card)}>
            <img src={card.RecipeId} alt={card.title} /> {/* Assuming an 'imageUrl' property */}
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
