POST http://localhost:5000/api/expenses
{
  "tripId": "6a0e0895d6771d175ea1cdf4",

  "payerId": "6a0dfa7a8145ef7230628e43",

  "amount": 2000,

  "currency": "INR",

  "category": "food",

  "description": "Dinner expense",

  "splitType": "equal",

  "participants": [
    "6a0dfa7a8145ef7230628e43",
    "6a0e05af8145ef7230628e44"
  ]
}  

Response
{
    "success": true,
    "message": "Expense created successfully",
    "data": {
        "expense": {
            "tripId": "6a0e0895d6771d175ea1cdf4",
            "payerId": "6a0dfa7a8145ef7230628e43",
            "amount": 2000,
            "currency": "INR",
            "convertedAmount": 2000,
            "category": "food",
            "description": "Dinner expense",
            "splitType": "equal",
            "_id": "6a0e9a3d320d9d09499f74f6",
            "expenseDate": "2026-05-21T05:38:05.078Z",
            "createdAt": "2026-05-21T05:38:05.090Z",
            "updatedAt": "2026-05-21T05:38:05.090Z",
            "__v": 0
        },
        "splits": [
            {
                "expenseId": "6a0e9a3d320d9d09499f74f6",
                "userId": "6a0dfa7a8145ef7230628e43",
                "amountOwed": 1000,
                "percentage": null
            },
            {
                "expenseId": "6a0e9a3d320d9d09499f74f6",
                "userId": "6a0e05af8145ef7230628e44",
                "amountOwed": 1000,
                "percentage": null
            }
        ]
    }
}



POST http://localhost:5000/api/expenses (unequal splits)
{
  "tripId": "6a0e0895d6771d175ea1cdf4",

  "payerId": "6a0e05af8145ef7230628e44",

  "amount": 5000,

  "currency": "INR",

  "category": "hotel",

  "description": "Hotel booking",

  "splitType": "unequal",

  "splits": [
    {
      "userId": "6a0dfa7a8145ef7230628e43",
      "amountOwed": 3000
    },

    {
      "userId": "6a0e05af8145ef7230628e44",
      "amountOwed": 2000
    }
  ]
}

Response
{
    "success": true,
    "message": "Expense created successfully",
    "data": {
        "expense": {
            "tripId": "6a0e0895d6771d175ea1cdf4",
            "payerId": "6a0e05af8145ef7230628e44",
            "amount": 5000,
            "currency": "INR",
            "convertedAmount": 5000,
            "category": "hotel",
            "description": "Hotel booking",
            "splitType": "unequal",
            "_id": "6a0e9c3aa1ff595959ac0b73",
            "expenseDate": "2026-05-21T05:46:34.425Z",
            "createdAt": "2026-05-21T05:46:34.433Z",
            "updatedAt": "2026-05-21T05:46:34.433Z",
            "__v": 0
        },
        "splits": [
            {
                "expenseId": "6a0e9c3aa1ff595959ac0b73",
                "userId": "6a0dfa7a8145ef7230628e43",
                "amountOwed": 3000,
                "percentage": null
            },
            {
                "expenseId": "6a0e9c3aa1ff595959ac0b73",
                "userId": "6a0e05af8145ef7230628e44",
                "amountOwed": 2000,
                "percentage": null
            }
        ]
    }
}


Multi-Currency + Percentage Split
POST http://localhost:5000/api/expenses
{
  "tripId": "6a0e0895d6771d175ea1cdf4",

  "payerId": "6a0e05af8145ef7230628e44",

  "amount": 100,

  "currency": "USD",

  "category": "transport",

  "description": "Taxi booking",

  "splitType": "percentage",

  "splits": [
    {
      "userId": "6a0dfa7a8145ef7230628e43",
      "percentage": 70
    },

    {
      "userId": "6a0e05af8145ef7230628e44",
      "percentage": 30
    }
  ]
}

Response
{
    "success": true,
    "message": "Expense created successfully",
    "data": {
        "expense": {
            "tripId": "6a0e0895d6771d175ea1cdf4",
            "payerId": "6a0e05af8145ef7230628e44",
            "amount": 100,
            "currency": "USD",
            "convertedAmount": 9500,
            "category": "transport",
            "description": "Taxi booking",
            "splitType": "percentage",
            "_id": "6a0e9d21a1ff595959ac0b76",
            "expenseDate": "2026-05-21T05:50:25.138Z",
            "createdAt": "2026-05-21T05:50:25.139Z",
            "updatedAt": "2026-05-21T05:50:25.139Z",
            "__v": 0
        },
        "splits": [
            {
                "expenseId": "6a0e9d21a1ff595959ac0b76",
                "userId": "6a0dfa7a8145ef7230628e43",
                "amountOwed": 6650,
                "percentage": 70
            },
            {
                "expenseId": "6a0e9d21a1ff595959ac0b76",
                "userId": "6a0e05af8145ef7230628e44",
                "amountOwed": 2850,
                "percentage": 30
            }
        ]
    }
}