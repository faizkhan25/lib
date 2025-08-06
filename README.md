# Student Management System

A full-stack web application built with React.js, Node.js, Express.js, and MySQL for managing student records with CRUD operations.

## Features
- ✅ Add new students with course assignments
- ✅ View all students with course details
- ✅ Edit/update student information
- ✅ Delete students
- ✅ Responsive design with Bootstrap
- ✅ RESTful API backend

## Tech Stack
- **Frontend**: React.js, Bootstrap, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Styling**: CSS, Bootstrap

## Project Structure
```
Student-Mgmt-System/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── studentController.js
│   │   └── courseController.js
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   └── courseRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.js
│   │   │   ├── StudentList.js
│   │   │   ├── AddStudent.js
│   │   │   └── EditStudent.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure database connection in `.env` file:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=student_management
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Courses
- `GET /api/courses` - Get all courses

## Database Schema
```sql
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  dob DATE NOT NULL,
  mobileNo VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  course_id INT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

## Usage
1. Start both backend and frontend servers
2. Access the application at `http://localhost:3000`
3. Use the navigation menu to:
   - View all students
   - Add new students
   - Edit existing students
   - Delete students

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.
