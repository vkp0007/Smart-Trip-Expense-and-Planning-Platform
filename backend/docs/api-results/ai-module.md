POST http://localhost:5000/api/ai/expense-breakdown
{
  "tripId": "6a0e0895d6771d175ea1cdf4",
  "userId": "6a0dfa7a8145ef7230628e43"
}

{
    "success": true,
    "data": {
        "explanation": "Your balance is negative because your share of trip expenses exceeds the amount you personally paid.",
        "summary": "Your balances are fully settled."
    }
}