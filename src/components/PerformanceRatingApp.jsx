import React, { useState } from 'react';
import { Star, X, Users, Tag, Calendar, Clock } from 'lucide-react';

// Performance Card Component
const PerformanceCard = ({ performance, onRate, onClick }) => {
  const [showRatingForm, setShowRatingForm] = useState(false);

  return (
    <div className="bg-white mt-30 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 relative">
      <img
        src={`/assets/rahul.png`} // Placeholder image
        alt={`Performance of ${performance.name} by ${performance.performer}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{performance.name}</h2>
        <p className="text-gray-600 mb-4">Performer: {performance.performer}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowRatingForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Rate
          </button>
          <button
            onClick={() => onClick(performance)}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Details
          </button>
        </div>
      </div>
      {showRatingForm && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <RatingForm
              onSubmit={(rating) => {
                onRate(performance.id, rating);
                setShowRatingForm(false);
              }}
            />
            <button
              onClick={() => setShowRatingForm(false)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Rating Form Component
const RatingForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rating);
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-600 font-bold text-center">Thank you for your rating!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center justify-center mb-4">
        {[...Array(10)].map((_, i) => (
          <Star
            key={i}
            size={28}
            onClick={() => setRating(i + 1)}
            className={`cursor-pointer transition-colors duration-200 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-300`}
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </form>
  );
};

// Performance Detail Component
const PerformanceDetail = ({ performance, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={performance.images[0]} // Display the first image as the main image
            alt={`Detailed view of ${performance.name} by ${performance.performer}`}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors duration-300"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{performance.name}</h2>
          <p className="text-xl text-gray-600 mb-4">Performer: {performance.performer}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Users size={20} className="text-blue-500 mr-2" />
              <span>Team: {performance.team.join(', ')}</span>
            </div>
            <div className="flex items-center">
              <Tag size={20} className="text-green-500 mr-2" />
              <span>Category: {performance.category}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="text-purple-500 mr-2" />
              <span>Date: {performance.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-red-500 mr-2" />
              <span>Duration: {performance.duration}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{performance.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Current Ratings</h3>
            <div className="flex items-center">
              <Star size={24} className="text-yellow-400 mr-2" />
              <span className="text-2xl font-bold">{performance.averageRating.toFixed(1)}</span>
              <span className="text-gray-500 ml-2">({performance.ratings.length} ratings)</span>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {performance.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1} of ${performance.name}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Application Component
const PerformanceRatingApp = () => {
  const [performances, setPerformances] = useState([
    {
      id: 1,
      name: "Moonlight Sonata",
      performer: "John Doe",
      team: ["Alice", "Bob", "Charlie"],
      category: "Classical",
      date: "2024-05-15",
      duration: "45 minutes",
      description: "A haunting rendition of Beethoven's famous piano sonata.",
      ratings: [8, 9, 7, 8, 9],
      averageRating: 8.2,
      images: [
        '/assets/moonlight1.jpg',
        '/assets/moonlight2.jpg',
        '/assets/moonlight3.jpg',
        '/assets/moonlight4.jpg',
        '/assets/moonlight5.jpg',
      ],
    },
    {
      id: 2,
      name: "Swan Lake",
      performer: "Jane Smith",
      team: ["David", "Emma", "Frank"],
      category: "Ballet",
      date: "2024-06-01",
      duration: "2 hours",
      description: "A breathtaking performance of Tchaikovsky's classic ballet.",
      ratings: [9, 8, 9, 10, 9],
      averageRating: 9,
      images: [
        '/assets/swanlake1.jpg',
        '/assets/swanlake2.jpg',
        '/assets/swanlake3.jpg',
        '/assets/swanlake4.jpg',
        '/assets/swanlake5.jpg',
      ],
    },
    {
      id: 3,
      name: "The Nutcracker",
      performer: "Bob Johnson",
      team: ["Grace", "Henry", "Ivy"],
      category: "Ballet",
      date: "2024-12-20",
      duration: "2 hours 15 minutes",
      description: "A magical Christmas performance of this beloved ballet.",
      ratings: [8, 7, 9, 8, 8],
      averageRating: 8,
      images: [
        '/assets/nutcracker1.jpg',
        '/assets/nutcracker2.jpg',
        '/assets/nutcracker3.jpg',
        '/assets/nutcracker4.jpg',
        '/assets/nutcracker5.jpg',
      ],
    },
  ]);

  const [selectedPerformance, setSelectedPerformance] = useState(null);

  const handleRate = (id, rating) => {
    setPerformances((prevPerformances) =>
      prevPerformances.map((perf) => {
        if (perf.id === id) {
          const newRatings = [...perf.ratings, rating];
          const newAverage = newRatings.reduce((sum, r) => sum + r, 0) / newRatings.length;
          return { ...perf, ratings: newRatings, averageRating: newAverage };
        }
        return perf;
      })
    );
  };

  const calculateAverageRating = () => {
    const allRatings = performances.flatMap((perf) => perf.ratings);
    return allRatings.length > 0
      ? (allRatings.reduce((sum, rating) => sum + rating, 0) / allRatings.length).toFixed(1)
      : 'N/A';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Performance Rating System</h1>
        <div className="text-center mb-12 bg-white rounded-lg shadow-md p-6 inline-block">
          <p className="text-xl text-gray-700">Overall Average Rating</p>
          <p className="font-bold text-5xl text-blue-600">{calculateAverageRating()}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((performance) => (
            <PerformanceCard
              key={performance.id}
              performance={performance}
              onRate={handleRate}
              onClick={setSelectedPerformance}
            />
          ))}
        </div>
      </div>
      {selectedPerformance && (
        <PerformanceDetail
          performance={selectedPerformance}
          onClose={() => setSelectedPerformance(null)}
        />
      )}
    </div>
  );
};

export default PerformanceRatingApp;
