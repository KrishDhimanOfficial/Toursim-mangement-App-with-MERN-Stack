# Tour and Travel Management API

This is a RESTful API for managing tours, destinations, posts, and orders in a travel management system. It provides endpoints for retrieving tour information, managing posts and comments, and processing orders through Razorpay.

## Features

- **Tour Management**: Retrieve hot tours, all tours, and tours by slug.
- **Destination Management**: Get top destinations.
- **Post Management**: Fetch recent posts, all posts, and posts by category.
- **Comment System**: Create and reply to comments on posts.
- **Bookings **: Create and validate Bookings using Razorpay.
  
## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Razorpay API

## Installation

1. Clone the repository:
   
   git clone https://github.com/KrishDhimanOfficial/Toursim-mangement-App-with-MERN-Stack
   
2. Navigate to the project directory:

   cd tour-management-api

3. Install the dependencies:

   npm install

4. Create a .env file in the root directory and add your configuration variables:

RAZORPAY_ID=your_razorpay_id
RAZORPAY_KEY=your_razorpay_key
SERVER_TOUR_LOCATION_IMG_URL=your_image_url
SERVER_TOUR_IMG_URL=your_tour_image_url
SERVER_POST_IMG_URL=your_post_image_url

5. To start the server, run:
   
  npm start

6. Start Client- side

   npm run dev
