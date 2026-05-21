Get Budget Summary
GET http://localhost:5000/api/budget/TRIP_ID
{
    "success": true,
    "data": {
        "totalBudget": 50000,
        "totalSpent": 26500,
        "remainingBudget": 23500,
        "duration": 5,
        "dailyBudget": 10000,
        "categoryBudgets": {
            "food": 15000,
            "hotel": 20000,
            "transport": 10000,
            "activities": 5000
        },
        "alerts": [
            {
                "category": "food",
                "status": "WITHIN_BUDGET",
                "allocated": 15000,
                "spent": 2000,
                "remaining": 13000
            },
            {
                "category": "hotel",
                "status": "WITHIN_BUDGET",
                "allocated": 20000,
                "spent": 15000,
                "remaining": 5000
            },
            {
                "category": "transport",
                "status": "WITHIN_BUDGET",
                "allocated": 10000,
                "spent": 9500,
                "remaining": 500
            }
        ]
    }
}  // inside trip model add category wise buget option