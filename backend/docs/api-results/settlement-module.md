Get Trip Balances
GET http://localhost:5000/api/settlements/6a0e0895d6771d175ea1cdf4/balances

{
    "success": true,
    "data": {
        "balances": {
            "6a0dfa7a8145ef7230628e43": -8650,
            "6a0e05af8145ef7230628e44": 18650
        },
        "suggestedSettlements": [
            {
                "fromUserId": "6a0dfa7a8145ef7230628e43",
                "toUserId": "6a0e05af8145ef7230628e44",
                "amount": 8650
            }
        ]
    }
}

Create Settlement

POST http://localhost:5000/api/settlements
{
  "tripId": "6a0e0895d6771d175ea1cdf4",

  "fromUserId": "6a0dfa7a8145ef7230628e43",

  "toUserId": "6a0e05af8145ef7230628e44",

  "amount": 3000,

  "currency": "INR"
}


POST settlement balance

{
    "success": true,
    "data": {
        "balances": {
            "6a0dfa7a8145ef7230628e43": -5650,
            "6a0e05af8145ef7230628e44": 15650
        },
        "suggestedSettlements": [
            {
                "fromUserId": "6a0dfa7a8145ef7230628e43",
                "toUserId": "6a0e05af8145ef7230628e44",
                "amount": 5650
            }
        ]
    }
}