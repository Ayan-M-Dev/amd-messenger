# Messenger Application

## Overview
The Messenger Application is a modern and secure messaging platform that leverages cutting-edge web technologies to provide real-time communication and a seamless user experience. The application is designed to be fast, reliable, and easy to use, with a focus on privacy and security.

## Objective
Our objective is to provide a robust and feature-rich messaging platform that caters to the needs of individuals and organizations. The application includes the following key features:
- Real-time messaging with instant notifications.
- Secure user authentication and data storage.
- Integration with cloud services for media storage.
- Responsive and user-friendly interface.
- Support for various message types, including text, images, and files.

## Key Features
- **Real-time Messaging:** Powered by Pusher and WebSockets for instant communication.
- **User Authentication:** Secure authentication using NextAuth and bcrypt for password hashing.
- **Media Uploads:** Integration with Cloudinary for image and file storage.
- **State Management:** Efficient state management using Zustand.
- **Forms Handling:** Easy form management with react-hook-form.
- **Notifications:** Real-time toast notifications using react-hot-toast.
- **Custom Styling:** Tailwind CSS for styling and responsive design.

## Technological Stack
The project leverages a powerful technological stack, including:
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (via Prisma)
- **Authentication:** NextAuth.js
- **Real-time Communication:** Pusher, Pusher.js
- **Form Management:** react-hook-form
- **Notifications:** react-hot-toast
- **Media Storage:** Cloudinary
- **State Management:** Zustand

## Installation

### Set Up the Environment
1. Clone the repository: `git clone https://github.com/your-repo/messenger-app.git`
2. Navigate to the project directory: `cd messenger-app`
3. Create a `.env` file based on the provided `.env.example` and configure your environment variables.

### Install Dependencies
1. Install the required dependencies: `npm install`

### Set Up the Database
1. Install the Prisma CLI: `npx prisma`
2. Run the Prisma migrations to set up your database: `npx prisma migrate dev`
3. Generate Prisma client: `npx prisma generate`

### Run the Application
1. Start the development server: `npm run dev`
2. The app should now be running on `http://localhost:3000`.

## Docker Setup (Optional)

### Build the Docker Image
1. Build the Docker image: `docker build -t messenger-app .`

### Run the Docker Container
1. Run the Docker container: `docker run -p 3000:3000 messenger-app`
2. The app will be accessible at `http://localhost:3000`.

## Usage
For detailed usage instructions and examples, please refer to the User Guide.

## Contributing
We welcome contributions from the community. If you'd like to contribute to our project, please refer to our Contribution Guidelines.

## License
This project is licensed under the MIT License.
