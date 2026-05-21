Create Support Ticket
POST http://localhost:5000/api/support

{
  "tripId": "6a0e0895d6771d175ea1cdf4",

  "createdBy": "6a0dfa7a8145ef7230628e43",

  "issueType": "TRIP_PLANNING",

  "message":
    "Need help finding affordable beachside hotels."
}

Response : {
    "success": true,
    "message": "Support ticket created successfully",
    "data": {
        "tripId": "6a0e0895d6771d175ea1cdf4",
        "createdBy": "6a0dfa7a8145ef7230628e43",
        "issueType": "TRIP_PLANNING",
        "message": "Need help finding affordable beachside hotels.",
        "status": "OPEN",
        "_id": "6a0eb1e798180dc63ec1e361",
        "createdAt": "2026-05-21T07:19:03.491Z",
        "updatedAt": "2026-05-21T07:19:03.491Z",
        "__v": 0
    }
}

PATCH http://localhost:5000/api/support/status
{
  "ticketId": "6a0eb1e798180dc63ec1e361",

  "status": "IN_PROGRESS"
}

{
    "success": true,
    "message": "Ticket status updated successfully",
    "data": {
        "_id": "6a0eb1e798180dc63ec1e361",
        "tripId": "6a0e0895d6771d175ea1cdf4",
        "createdBy": "6a0dfa7a8145ef7230628e43",
        "issueType": "TRIP_PLANNING",
        "message": "Need help finding affordable beachside hotels.",
        "status": "IN_PROGRESS",
        "createdAt": "2026-05-21T07:19:03.491Z",
        "updatedAt": "2026-05-21T07:25:21.488Z",
        "__v": 0
    }
}