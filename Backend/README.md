# API Documentation

## POST /users/register

**Description:**  
Register a new user. This endpoint creates a new user account with the required details.

**Request Body:**  
- `fullname`: An object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

**Responses:**  
- **201 Created**  
  Returns the created user object and a JSON Web Token.
  ```json
  {
    "user": {
      // ...user details...
    },
    "token": "JWT token string"
  }
  ```
- **400 Bad Request**  
  Returns a list of validation errors if any required data is missing or invalid.
  ```json
  {
    "errors": [
      // ...error details...
    ]
  }
