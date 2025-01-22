// // import React, { useState, useEffect } from "react";

// // const ReviewSection = () => {
// //   const [reviews] = useState([
// //     { id: 1, name: "Faith", review: "They went above and beyond!", rating: 5 },
// //     { id: 2, name: "Jennifer", review: "Truly a gem in planning!", rating: 4 },
// //     { id: 3, name: "ONE39 Central", review: "Flawless corporate event!", rating: 4 },
// //     { id: 4, name: "David", review: "An unforgettable celebration!", rating: 5 },
// //     { id: 5, name: "Sophia", review: "Incredible birthday planning!", rating: 5 },
// //     { id: 6, name: "John", review: "Attention to every detail.", rating: 4 },
// //     { id: 7, name: "Anna", review: "Wonderful experience overall!", rating: 5 },
// //     { id: 8, name: "Chris", review: "Highly recommend their services!", rating: 4 },
// //   ]);

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [fadeState, setFadeState] = useState("animate-fadeIn");

// //   // Cycle reviews every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setFadeState("animate-fadeOut"); // Start fade-out animation
// //       setTimeout(() => {
// //         setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length); // Update visible reviews
// //         setFadeState("animate-fadeIn"); // Start fade-in animation
// //       }, 1000); // Wait for fade-out to complete
// //     }, 5000);

// //     return () => clearInterval(interval); // Cleanup on unmount
// //   }, [reviews.length]);

// //   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

// //   return (
// //     <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center">
// //       <h2 className="text-4xl font-bold text-purple-900 mb-8">What Our Clients Say</h2>

// //       {/* Reviews Grid */}
// //       <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${fadeState}`}>
// //         {visibleReviews.map((review) => (
// //           <div
// //             key={review.id}
// //             className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
// //           >
// //             <div className="flex justify-center mb-4">
// //               {Array(review.rating)
// //                 .fill("⭐")
// //                 .map((star, i) => (
// //                   <span key={i} className="text-gold-400 text-xl">
// //                     {star}
// //                   </span>
// //                 ))}
// //             </div>
// //             <p className="italic text-gray-700 leading-relaxed mb-6">
// //               "{review.review}"
// //             </p>
// //             <h4 className="text-lg font-bold text-purple-900">— {review.name}</h4>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Leave a Review Button */}
// //       <div className="mt-8">
// //         <button
// //           onClick={() => alert("Add review modal logic here!")}
// //           className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
// //         >
// //           Leave a Review
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ReviewSection;

// import React, { useState, useEffect } from "react";

// const ReviewSection = () => {
//   const [reviews] = useState([
//     { id: 1, name: "Faith", review: "They went above and beyond!", rating: 5 },
//     { id: 2, name: "Jennifer", review: "Truly a gem in planning!", rating: 4 },
//     { id: 3, name: "ONE39 Central", review: "Flawless corporate event!", rating: 4 },
//     { id: 4, name: "David", review: "An unforgettable celebration!", rating: 5 },
//     { id: 5, name: "Sophia", review: "Incredible birthday planning!", rating: 5 },
//     { id: 6, name: "John", review: "Attention to every detail.", rating: 4 },
//     { id: 7, name: "Anna", review: "Wonderful experience overall!", rating: 5 },
//     { id: 8, name: "Chris", review: "Highly recommend their services!", rating: 4 },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fadeState, setFadeState] = useState("animate-fadeIn");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Cycle reviews every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeState("animate-fadeOut"); // Start fade-out animation
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length); // Update visible reviews
//         setFadeState("animate-fadeIn"); // Start fade-in animation
//       }, 1000); // Wait for fade-out to complete
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [reviews.length]);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   return (
//     <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center">
//       <h2 className="text-4xl font-bold text-purple-900 mb-8">What Our Clients Say</h2>

//       {/* Reviews Grid */}
//       <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${fadeState}`}>
//         {visibleReviews.map((review) => (
//           <div
//             key={review.id}
//             className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="flex justify-center mb-4">
//               {Array(review.rating)
//                 .fill("⭐")
//                 .map((star, i) => (
//                   <span key={i} className="text-gold-400 text-xl">
//                     {star}
//                   </span>
//                 ))}
//             </div>
//             <p className="italic text-gray-700 leading-relaxed mb-6">
//               "{review.review}"
//             </p>
//             <h4 className="text-lg font-bold text-purple-900">— {review.name}</h4>
//           </div>
//         ))}
//       </div>

//       {/* Leave a Review Button */}
//       <div className="mt-8">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
//         >
//           Leave a Review
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-2xl font-bold text-purple-900 mb-4">Add a Review</h3>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full mb-4 p-2 border rounded"
//             />
//             <textarea
//               placeholder="Your Review"
//               className="w-full mb-4 p-2 border rounded"
//             ></textarea>
//             <div className="flex justify-end space-x-2">
//               <button
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
//                 onClick={() => alert("Submit review logic here!")}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ReviewSection;
// import React, { useState, useEffect } from "react";
// import LZString from "lz-string";

// const MAX_REVIEWS = 50; // Limit number of reviews

// const ReviewSection = () => {
//   // Load and decompress saved reviews from localStorage
//   const loadReviews = () => {
//     const compressedData = localStorage.getItem("reviews");
//     if (compressedData) {
//       const decompressed = LZString.decompress(compressedData);
//       return decompressed ? JSON.parse(decompressed) : [];
//     }
//     return [];
//   };

//   const [reviews, setReviews] = useState(loadReviews);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fadeState, setFadeState] = useState("animate-fadeIn");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newReview, setNewReview] = useState({ name: "", review: "", rating: 5 });

//   // Save compressed reviews to localStorage whenever they change
//   useEffect(() => {
//     const compressedData = LZString.compress(JSON.stringify(reviews));
//     localStorage.setItem("reviews", compressedData);
//   }, [reviews]);

//   // Cycle reviews every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeState("animate-fadeOut");
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
//         setFadeState("animate-fadeIn");
//       }, 1000);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Handle new review input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmitReview = () => {
//     if (!newReview.name || !newReview.review) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const newEntry = {
//       id: Date.now(), // Unique ID based on timestamp
//       name: newReview.name,
//       review: newReview.review,
//       rating: Number(newReview.rating),
//     };

//     let updatedReviews = [newEntry, ...reviews];

//     // Auto-reduce: Keep only the latest 50 reviews
//     if (updatedReviews.length > MAX_REVIEWS) {
//       updatedReviews = updatedReviews.slice(0, MAX_REVIEWS);
//     }

//     setReviews(updatedReviews);
//     setNewReview({ name: "", review: "", rating: 5 });
//     setIsModalOpen(false);
//   };

//   // Delete review function
//   const handleDeleteReview = (id) => {
//     const updatedReviews = reviews.filter((review) => review.id !== id);
//     setReviews(updatedReviews);
//   };

//   return (
//     <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center">
//       <h2 className="text-4xl font-bold text-purple-900 mb-8">What Our Clients Say</h2>

//       {/* Reviews Grid */}
//       <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${fadeState}`}>
//         {visibleReviews.map((review) => (
//           <div
//             key={review.id}
//             className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
//           >
//             <div className="flex justify-center mb-4">
//               {Array(review.rating)
//                 .fill("⭐")
//                 .map((star, i) => (
//                   <span key={i} className="text-gold-400 text-xl">
//                     {star}
//                   </span>
//                 ))}
//             </div>
//             <p className="italic text-gray-700 leading-relaxed mb-6">
//               "{review.review}"
//             </p>
//             <h4 className="text-lg font-bold text-purple-900">— {review.name}</h4>

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDeleteReview(review.id)}
//               className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-full hover:bg-red-600 transition"
//             >
//               ✖
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Leave a Review Button */}
//       <div className="mt-8">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
//         >
//           Leave a Review
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-2xl font-bold text-purple-900 mb-4">Add a Review</h3>

//             {/* Name Input */}
//             <input
//               type="text"
//               name="name"
//               value={newReview.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               className="w-full mb-4 p-2 border rounded"
//             />

//             {/* Review Textarea */}
//             <textarea
//               name="review"
//               value={newReview.review}
//               onChange={handleInputChange}
//               placeholder="Your Review"
//               className="w-full mb-4 p-2 border rounded"
//             ></textarea>

//             {/* Rating Select */}
//             <select
//               name="rating"
//               value={newReview.rating}
//               onChange={handleInputChange}
//               className="w-full mb-4 p-2 border rounded"
//             >
//               <option value="5">⭐⭐⭐⭐⭐ - 5 Stars</option>
//               <option value="4">⭐⭐⭐⭐ - 4 Stars</option>
//               <option value="3">⭐⭐⭐ - 3 Stars</option>
//               <option value="2">⭐⭐ - 2 Stars</option>
//               <option value="1">⭐ - 1 Star</option>
//             </select>

//             {/* Buttons */}
//             <div className="flex justify-end space-x-2">
//               <button
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
//                 onClick={handleSubmitReview}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ReviewSection;

import React, { useState, useEffect } from "react";

const ReviewSection = () => {
  const [reviews] = useState([
    { id: 1, name: "Faith", review: "They went above and beyond!", rating: 5 },
    { id: 2, name: "Jennifer", review: "Truly a gem in planning!", rating: 4 },
    { id: 3, name: "ONE39 Central", review: "Flawless corporate event!", rating: 4 },
    { id: 4, name: "David", review: "An unforgettable celebration!", rating: 5 },
    { id: 5, name: "Sophia", review: "Incredible birthday planning!", rating: 5 },
    { id: 6, name: "John", review: "Attention to every detail.", rating: 4 },
    { id: 7, name: "Anna", review: "Wonderful experience overall!", rating: 5 },
    { id: 8, name: "Chris", review: "Highly recommend their services!", rating: 4 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("animate-fadeIn");

  // Cycle reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("animate-fadeOut"); // Start fade-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length); // Update visible reviews
        setFadeState("animate-fadeIn"); // Start fade-in animation
      }, 1000); // Wait for fade-out to complete
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [reviews.length]);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 lg:py-20 text-center">
      <h2 className="text-4xl font-bold text-purple-900 mb-8">What Our Clients Say</h2>

      {/* Reviews Grid */}
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${fadeState}`}>
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              {Array(review.rating)
                .fill("⭐")
                .map((star, i) => (
                  <span key={i} className="text-gold-400 text-xl">
                    {star}
                  </span>
                ))}
            </div>
            <p className="italic text-gray-700 leading-relaxed mb-6">
              "{review.review}"
            </p>
            <h4 className="text-lg font-bold text-purple-900">— {review.name}</h4>
          </div>
        ))}
      </div>

      {/* Leave a Review Button */}
      {/* <div className="mt-8">
        <button
          onClick={() => alert("Add review modal logic here!")}
          className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
        >
          Leave a Review
        </button>
      </div> */}
    </section>
  );
};

export default ReviewSection;
