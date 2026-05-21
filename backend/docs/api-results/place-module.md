Get Place Insights
GET http://localhost:5000/api/places/Goa
{
    "success": true,
    "data": {
        "popularAttractions": [
            "Baga Beach",
            "Fort Aguada",
            "Dudhsagar Falls"
        ],
        "warnings": [
            "Heavy rainfall during monsoon season",
            "Water sports may be unavailable during storms"
        ],
        "seasonalNotes": "Best time to visit is November to February."
    }
}


Generate Travel Advice
POST http://localhost:5000/api/places/travel-advice
{
  "destination": "Goa",

  "startDate": "2026-06-01",

  "endDate": "2026-06-05"
}
{
    "success": true,
    "data": {
        "destination": "Goa",
        "travelWindow": {
            "startDate": "2026-06-01",
            "endDate": "2026-06-05"
        },
        "attractions": [
            "Baga Beach",
            "Fort Aguada",
            "Dudhsagar Falls"
        ],
        "warnings": [
            "Heavy rainfall during monsoon season",
            "Water sports may be unavailable during storms"
        ],
        "travelAdvice": "Monsoon season expected. Outdoor activities may face disruptions."
    }
}