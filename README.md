# Smart Pothole Detection & Civic Management (React + Flask API Version)

eNivaran is an ML-powered road safety and civic issue reporting system built with a modern, decoupled architecture. The frontend is a **React Single Page Application (SPA)**, and the backend is a powerful **Python Flask REST API**.

This new architecture allows for independent development, scaling, and deployment. The React frontend can be easily deployed to static hosting platforms like **Vercel**, while the resource-intensive Python backend can be hosted on a suitable server environment.

## Core Architecture

-   **Frontend (React):** A standalone client-side application built with React and Vite. It handles all user interface elements, routing, and state management. It communicates with the backend via REST API calls.
-   **Backend (Flask API):** A pure REST API built with Flask. It manages user authentication, database interactions (SQLite), real-time chat (Firebase), AI chatbot (Google Gemini), and executes the heavy machine learning models for pothole and duplicate detection.

## Technology Stack

### Frontend (Deploy to Vercel)
*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Routing:** React Router
*   **API Client:** Axios
*   **UI:** Bootstrap 5 & Custom CSS
*   **State Management:** React Hooks (useState, useEffect, useContext)

### Backend (Host on Render, Heroku, etc.)
*   **Framework:** Python 3.11, Flask
*   **Database:** SQLite, Firebase Realtime Database (Chat)
*   **ML/AI:**
    *   **Pothole Detection:** PyTorch, Ultralytics (YOLO), OpenCV, ONNX Runtime
    *   **Duplicate Detection:** Sentence-BERT, ResNet50, XGBoost, Scikit-learn
    *   **AI Chatbot:** Google Generative AI (Gemini)
*   **API:** RESTful design with Flask-CORS

## Local Development Setup

You need to run two separate servers for local development: one for the React frontend and one for the Flask backend.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate

    # Linux/macOS
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    *   Create a `.env` file inside the `backend` directory.
    *   Copy the contents of `.env.example` into it and fill in your credentials.
    ```plaintext
    GEMINI_API_KEY=your_gemini_api_key
    FLASK_SECRET_KEY=your_secret_key
    FIREBASE_DATABASE_URL=your_firebase_url
    ```

5.  **Firebase Setup:**
    *   Place your `firebase-service-account.json` file in the `backend` directory.

6.  **Run the Flask API Server:**
    ```bash
    flask run
    ```
    The backend API will be running at `http://127.0.0.1:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory (in a new terminal):**
    ```bash
    cd frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Run the React Development Server:**
    ```bash
    npm run dev
    ```
    The frontend application will be running at `http://127.0.0.1:5173` (or another port if 5173 is busy). Open this URL in your browser.

## Deployment

### 1. Deploying the Backend API

The backend cannot be deployed to Vercel due to its size and Python server requirements.
**Recommended Hosting Platforms:**
-   **Render:** Good free tier for Python web services.
-   **Heroku:** Classic choice for deploying server applications.
-   **AWS EC2 / Google Cloud Run:** More advanced options for full control.

**General Steps:**
1.  Choose a hosting provider and create a new "Web Service".
2.  Connect your Git repository.
3.  Set the build command: `pip install -r requirements.txt`.
4.  Set the start command: `gunicorn --worker-tmp-dir /dev/shm "flask_app:create_app()"`. (You may need to add `gunicorn` to `requirements.txt`).
5.  Configure the environment variables (API keys, secret key, etc.) in the provider's dashboard.
6.  Deploy. Note the public URL of your API (e.g., `https://enivaran-api.onrender.com`).

### 2. Deploying the Frontend to Vercel

1.  **Update the API URL:**
    *   In the `frontend/src/api.js` file, change the `baseURL` to your deployed backend API's public URL.
    ```javascript
    const API = axios.create({
      baseURL: 'https://your-deployed-backend-url.com/api', // <-- CHANGE THIS
      withCredentials: true,
    });
    ```
2.  **Push your code to GitHub/GitLab.**

3.  **Deploy on Vercel:**
    *   Sign up or log in to [Vercel](https://vercel.com).
    *   Create a "New Project" and import your Git repository.
    *   Vercel will automatically detect it as a Vite project. The root directory should be `frontend`.
    *   The build command (`npm run build`) and output directory (`dist`) should be configured automatically.
    *   Click "Deploy". Vercel will build and host your React application.
"# Pothole_detection_reactt" 
