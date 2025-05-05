# E-Commerce Project

This is a full-stack e-commerce application built with React (Frontend) and Spring Boot (Backend). The project implements a modern e-commerce platform with product search functionality and a responsive user interface.

## Project Structure

The project is divided into two main components:

- `Ecommerece-front/`: React-based frontend application
- `Backend_prj/`: Spring Boot backend application

## Frontend (Ecommerece-front)

### Technologies Used
- React 18.2.0
- React Router DOM 6.22.1
- Axios for API calls
- React Toastify for notifications
- React Icons for UI icons
- Vite as the build tool

### Key Features
- Modern and responsive UI
- Client-side routing
- API integration with backend
- Toast notifications for user feedback
- Icon-based UI elements

### Getting Started with Frontend

1. Navigate to the frontend directory:
```bash

   cd Ecommerece-front
   ```

2. Install dependencies:
   npm install


3. Start the development server:
   npm run dev
   

4. Build for production:
   npm run build
   

## Backend (Backend_prj)

### Technologies Used
- Spring Boot 3.2.3
- Spring Data JPA
- H2 Database
- Spring Web
- Spring Validation
- Lombok
- SpringDoc OpenAPI (Swagger)

### Key Features
- RESTful API endpoints
- Database integration with JPA
- Input validation
- API documentation with Swagger
- H2 in-memory database for development

### Getting Started with Backend

1. Navigate to the backend directory:
   cd Backend_prj
   

2. Build the project using Maven:
   mvn clean install
   

3. Run the application:
   mvn spring-boot:run
   

## API Documentation

Once the backend is running, you can access the Swagger documentation at:
```
http://localhost:8080/swagger-ui.html
```

## Development Requirements

### Frontend
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Backend
- Java 17 or higher
- Maven 3.6 or higher

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 