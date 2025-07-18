import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ description, reviewsCount = 122, reviews }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      <nav className="descriptionbox-navigator" role="tablist">
        <button
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'description'}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'reviews'}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviewsCount})
        </button>
      </nav>

      <section
        className="descriptionbox-description"
        role="tabpanel"
        aria-hidden={activeTab !== 'description'}
        hidden={activeTab !== 'description'}
      >
        <p>{description || "No description available."}</p>
      </section>

      <section
        className="descriptionbox-reviews"
        role="tabpanel"
        aria-hidden={activeTab !== 'reviews'}
        hidden={activeTab !== 'reviews'}
      >
        {reviews && reviews.length ? (
          <ul className="reviews-list">
            {reviews.map((review, index) => (
              <li key={index} className="review-item">
                <p><strong>{review.author}</strong></p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </section>
    </div>
  );
}

export default DescriptionBox;
