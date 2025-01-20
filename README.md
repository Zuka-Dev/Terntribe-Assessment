# RESTful API for Causes and Contributions

## Project Overview
This project is a RESTful API built using Express.js. The API provides CRUD operations for managing social causes and allows users to contribute to these causes. The implementation is organized into a structured folder system for scalability and maintainability.

---

## Folder Structure
```
project-folder/
├── src/
│   ├── index.js         // Main entry point
│   ├── controllers/     // Business logic for API operations
│   │   └── causeController.js
│   ├── models/          // Data models for causes and contributions
│   │   ├── causeModel.js
│   │   └── contributionModel.js
│   ├── routes/          // Routes for API endpoints
│   │   └── causeRoutes.js
├── package.json         // Project metadata and dependencies
```

---

## Approach
1. **Classes for Modules**: 
   - Used JavaScript classes to represent the core logic for models and controllers, making the code modular and reusable.

2. **Temporary Database**:
   - Used in-memory arrays to simulate a database for causes and contributions.
   - This approach allows rapid prototyping without the need for database setup.

3. **Folder Structure**:
   - **Controllers**: Contain the logic for handling business operations (e.g., creating, updating, and retrieving causes).
   - **Models**: Define the data structure and handle operations related to causes and contributions.
   - **Routes**: Define the API endpoints and route requests to appropriate controllers.

4. **Error Handling**:
   - Ensured robust error handling with appropriate HTTP status codes and messages for validation and runtime errors.

5. **Modularity**:
   - Divided responsibilities into distinct layers, promoting clean code and ease of debugging.
