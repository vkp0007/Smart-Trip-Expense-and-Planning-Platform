POST /api/users/register

Request:
{
  "name": "Vinay",
  "email": "vinay@gmail.com",
  "password": "123456"
}
 Response
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "_id": "6a0dfa7a8145ef7230628e43",
        "name": "Vinay",
        "email": "vinay@gmail.com",
        "preferredCurrency": "INR",
        "loyalty": {
            "score": 0,
            "tier": "Bronze",
            "totalTrips": 0,
            "totalSpend": 0,
            "successfulSettlements": 0
        }
    }
}
Request POST http://localhost:5000/api/users/register

{
  "name": "Karain",
  "email": "karan@gmail.com",
  "password": "1234567"
}

{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "_id": "6a0e05af8145ef7230628e44",
        "name": "Karain",
        "email": "karan@gmail.com",
        "preferredCurrency": "INR",
        "loyalty": {
            "score": 0,
            "tier": "Bronze",
            "totalTrips": 0,
            "totalSpend": 0,
            "successfulSettlements": 0
        }
    }
}


 again same request
 {
  "name": "Vinay",
  "email": "vinay@gmail.com",
  "password": "123456"
}
 response
 {
    "success": false,
    "message": "User already exists"
}

POST http://localhost:5000/api/users/login
{
  "email": "vinay@gmail.com",
  "password": "123456"
}
 Response 
{
    "success": true,
    "message": "Login successful",
    "data": {
        "_id": "6a0dfa7a8145ef7230628e43",
        "name": "Vinay",
        "email": "vinay@gmail.com",
        "preferredCurrency": "INR",
        "loyalty": {
            "score": 0,
            "tier": "Bronze",
            "totalTrips": 0,
            "totalSpend": 0,
            "successfulSettlements": 0
        }
    }
}
{
  "email": "vi nay@gmail.com",
  "password": "123456"
}

{
    "success": false,
    "message": "Invalid email or password"
}

GET http://localhost:5000/api/users/6a0dfa7a8145ef7230628e43
{
    "success": true,
    "data": {
        "loyalty": {
            "score": 0,
            "tier": "Bronze",
            "totalTrips": 0,
            "totalSpend": 0,
            "successfulSettlements": 0
        },
        "_id": "6a0dfa7a8145ef7230628e43",
        "name": "Vinay",
        "email": "vinay@gmail.com",
        "preferredCurrency": "INR",
        "createdAt": "2026-05-20T18:16:26.031Z",
        "updatedAt": "2026-05-20T18:16:26.031Z",
        "__v": 0
    }
}