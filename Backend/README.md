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
  ```

## POST /users/login

**Description:**  
Login an existing user. This endpoint authenticates the user and returns a JSON Web Token along with the user details.

**Request Body:**  
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

**Responses:**  
- **200 OK**  
  Returns a JSON Web Token and user details.
  ```json
  {
    "token": "JWT token string",
    "user": {
      // ...user details...
    }
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
  ```
- **401 Unauthorized**  
  Returns an error message if the credentials are invalid.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## GET /users/profile

**Description:**  
Retrieve the profile of the authenticated user.

**Headers:**  
- `Authorization`: Bearer token (required).

**Responses:**  
- **200 OK**  
  Returns the authenticated user's details.
  ```json
  {
    "user": {
      // ...user details...
    }
  }
  ```
- **401 Unauthorized**  
  Returns an error message if the user is not authenticated.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## GET /users/logout

**Description:**  
Logout the authenticated user by clearing the token cookie and invalidating the JWT.

**Headers:**  
- `Authorization`: Bearer token (required).

**Responses:**  
- **200 OK**  
  Returns a success message.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **401 Unauthorized**  
  Returns an error message if the user is not authenticated.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Captain Routes

### POST /captains/register

**Description:**  
Register a new captain using the Captain model. This endpoint creates a captain entry with vehicle details.

**Request Body:**  
- `fullname`: Object containing:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters)
- `email` (string, required, valid email)
- `password` (string, required, minimum 6 characters)
- `vehicle`: Object containing:
  - `color` (string, required, minimum 3 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (integer, required, greater than 0)
  - `vehicleType` (string, required, one of ["car", "bike", "auto"])

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Responses:**  
- **201 Created**  
  Returns the created captain object and a JSON Web Token.
  ```json
  {
    "captain": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car",
        "location": {
          "latitude": 37.7749,
          "longitude": -122.4194
        }
      },
      "status": "active"
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
  ```

### POST /captains/login

**Description:**  
Login an existing captain. This endpoint authenticates the captain and returns a JSON Web Token along with the captain details.

**Request Body:**  
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum 6 characters)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

**Responses:**  
- **200 OK**  
  Returns a JSON Web Token and captain details.
  ```json
  {
    "token": "JWT token string",
    "captain": {
      // ...captain details...
    }
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
  ```
- **401 Unauthorized**  
  Returns an error message if the credentials are invalid.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### GET /captains/profile

**Description:**  
Retrieve the profile of the authenticated captain.

**Headers:**  
- `Authorization`: Bearer token (required).

**Responses:**  
- **200 OK**  
  Returns the authenticated captain's details.
  ```json
  {
    "captain": {
      // ...captain details...
    }
  }
  ```
- **401 Unauthorized**  
  Returns an error message if the captain is not authenticated.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### GET /captains/logout

**Description:**  
Logout the authenticated captain by clearing the token cookie and invalidating the JWT.

**Headers:**  
- `Authorization`: Bearer token (required).

**Responses:**  
- **200 OK**  
  Returns a success message.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **401 Unauthorized**  
  Returns an error message if the captain is not authenticated.
  ```json
  {
    "message": "Unauthorized"
  }
  ```
