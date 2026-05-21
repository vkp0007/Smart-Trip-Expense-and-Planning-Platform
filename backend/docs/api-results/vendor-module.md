Get All Vendors
GET http://localhost:5000/api/vendors
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Goa Beach Resort",
            "category": "HOTEL",
            "city": "Goa",
            "rating": 4.5,
            "contact": "+91-9876543210"
        },
        {
            "id": 2,
            "name": "Delhi Cab Services",
            "category": "TRANSPORT",
            "city": "Delhi",
            "rating": 4.2,
            "contact": "+91-9123456780"
        },
        {
            "id": 3,
            "name": "Mumbai Food Tours",
            "category": "FOOD",
            "city": "Mumbai",
            "rating": 4.7,
            "contact": "+91-9988776655"
        },
        {
            "id": 4,
            "name": "Goa Travel Guides",
            "category": "GUIDE",
            "city": "Goa",
            "rating": 4.8,
            "contact": "+91-9012345678"
        }
    ]
}

Filter vendor
GET http://localhost:5000/api/vendors/search?city=Goa&category=hotel

{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Goa Beach Resort",
            "category": "HOTEL",
            "city": "Goa",
            "rating": 4.5,
            "contact": "+91-9876543210"
        }
    ]
}