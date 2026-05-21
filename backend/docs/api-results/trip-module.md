POST http://localhost:5000/api/trips

{
  "title": "Goa Friends Trip",

  "description": "Weekend Goa trip with friends",

  "destination": "Goa",

  "startDate": "2026-06-01",

  "endDate": "2026-06-05",

  "baseCurrency": "INR",

  "totalBudget": 50000,

  "createdBy": "6a0dfa7a8145ef7230628e43",

  "participants": [
    {
      "user": "6a0dfa7a8145ef7230628e43",
      "role": "owner"
    }
  ]
}

Response:
{
    "success": true,
    "message": "Trip created successfully",
    "data": {
        "title": "Goa Friends Trip",
        "description": "Weekend Goa trip with friends",
        "destination": "Goa",
        "startDate": "2026-06-01T00:00:00.000Z",
        "endDate": "2026-06-05T00:00:00.000Z",
        "baseCurrency": "INR",
        "totalBudget": 50000,
        "createdBy": "6a0dfa7a8145ef7230628e43",
        "participants": [
            {
                "user": "6a0dfa7a8145ef7230628e43",
                "role": "owner",
                "joinedAt": "2026-05-20T19:16:37.104Z"
            }
        ],
        "status": "planned",
        "_id": "6a0e0895d6771d175ea1cdf4",
        "createdAt": "2026-05-20T19:16:37.110Z",
        "updatedAt": "2026-05-20T19:16:37.110Z",
        "__v": 0
    }
}



POST http://localhost:5000/api/trips/participants
{
  "tripId": "6a0e0895d6771d175ea1cdf4",
  "userId": "6a0e05af8145ef7230628e44"
}

Response 
{
    "success": true,
    "message": "Participant added successfully",
    "data": {
        "_id": "6a0e0895d6771d175ea1cdf4",
        "title": "Goa Friends Trip",
        "description": "Weekend Goa trip with friends",
        "destination": "Goa",
        "startDate": "2026-06-01T00:00:00.000Z",
        "endDate": "2026-06-05T00:00:00.000Z",
        "baseCurrency": "INR",
        "totalBudget": 50000,
        "createdBy": "6a0dfa7a8145ef7230628e43",
        "participants": [
            {
                "user": "6a0dfa7a8145ef7230628e43",
                "role": "owner",
                "joinedAt": "2026-05-20T19:16:37.104Z"
            },
            {
                "user": "6a0e05af8145ef7230628e44",
                "role": "member",
                "joinedAt": "2026-05-20T19:27:12.300Z"
            }
        ],
        "status": "planned",
        "createdAt": "2026-05-20T19:16:37.110Z",
        "updatedAt": "2026-05-20T19:27:12.304Z",
        "__v": 1
    }
}

GET http://localhost:5000/api/trips/6a0e0895d6771d175ea1cdf4

{
    "success": true,
    "data": {
        "_id": "6a0e0895d6771d175ea1cdf4",
        "title": "Goa Friends Trip",
        "description": "Weekend Goa trip with friends",
        "destination": "Goa",
        "startDate": "2026-06-01T00:00:00.000Z",
        "endDate": "2026-06-05T00:00:00.000Z",
        "baseCurrency": "INR",
        "totalBudget": 50000,
        "createdBy": "6a0dfa7a8145ef7230628e43",
        "participants": [
            {
                "user": {
                    "_id": "6a0dfa7a8145ef7230628e43",
                    "name": "Vinay",
                    "email": "vinay@gmail.com"
                },
                "role": "owner",
                "joinedAt": "2026-05-20T19:16:37.104Z"
            },
            {
                "user": {
                    "_id": "6a0e05af8145ef7230628e44",
                    "name": "Karain",
                    "email": "karan@gmail.com"
                },
                "role": "member",
                "joinedAt": "2026-05-20T19:27:12.300Z"
            }
        ],
        "status": "planned",
        "createdAt": "2026-05-20T19:16:37.110Z",
        "updatedAt": "2026-05-20T19:27:12.304Z",
        "__v": 1
    }
}


PATCH http://localhost:5000/api/trips/6a0e0895d6771d175ea1cdf4/complete
{
    "success": true,
    "data": {
        "tripId": "6a0e0895d6771d175ea1cdf4",
        "status": "completed",
        "message": "Trip completed successfully"
    }
}