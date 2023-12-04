Backend Setup
Navigate to the backend directory:

cd backend
Install dependencies:

npm install
Create a PostgreSQL database and update the configuration in backend/.env:

env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_DATABASE=your_db_name
Run database migrations:

bash
npm run migrate
Start the backend server:

bash
npm start
