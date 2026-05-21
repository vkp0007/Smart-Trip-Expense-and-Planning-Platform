# Smart Trip Expense & Planning Platform

A backend-first intelligent trip expense and planning platform inspired by Splitwise.

The platform helps groups:
- Create and manage trips
- Split expenses using multiple strategies
- Handle multi-currency expenses
- Track balances and settlements
- Monitor budgets
- Generate AI-powered suggestions
- Access travel intelligence
- Escalate issues to support agents

This project is intentionally design-heavy and implementation-light, focusing on:
- system architecture
- API design
- domain modeling
- separation of concerns
- scalability thinking

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Features

## 1. User Management
- User registration
- User login
- User profile management
- Loyalty tracking

---

## 2. Trip & Group Management
- Create trips
- Add participants
- Define trip budget
- Assign base currency
- Track trip completion

---

## 3. Expense Splitting Engine
Supports:
- Equal split
- Unequal split
- Percentage split
- Multi-currency expenses

Features:
- One payer, multiple beneficiaries
- Currency conversion
- Rounding management
- Expense categorization

---

## 4. Settlement Engine
- Compute net balances
- Suggest minimal settlements
- Record settlement transactions

---

## 5. Budget Planner
- Budget utilization summary
- Remaining budget calculation
- Daily spending analytics
- Over-budget detection

---

## 6. Loyalty & Rewards Engine
- Loyalty score tracking
- Tier-based rewards
- Trip completion rewards

Tiers:
- Bronze
- Silver
- Gold

---

## 7. AI Chat Assist (Mocked)
- Expense breakdown explanations
- Budget optimization suggestions

Uses:
- Rule-based simulated responses
- Mock intelligence workflows

---

## 8. Place Insights
Provides:
- Attractions
- Warnings
- Seasonal travel notes
- Travel advice

Uses:
- Static JSON datasets

---

## 9. Vendor Directory
- Search vendors by city
- Filter vendors by category

---

## 10. Human Escalation System
- Support ticket generation
- Ticket lifecycle management
- Issue categorization

Issue Types:
- PAYMENT
- REFUND
- TRIP_PLANNING
- OTHER

---

# Project Structure

```txt
backend/

├── config/
│   └── databaseConnection.js
│
├── docs/
│   ├── design-document.md
│   ├── approach-notes.md
│   ├── test-cases.md
│   └── api-results/
│
├── modules/
│
│   ├── user/
│   ├── trip/
│   ├── expense/
│   ├── settlement/
│   ├── budget/
│   ├── loyalty/
│   ├── ai/
│   ├── support/
│   ├── vendor/
│   └── place/
│
├── postman/
│   └── SmartTrip.postman_collection.json
│
├── .env
├── .env.example
├── package.json
├── README.md
└── index.js
```

---

# Installation Guide

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate To Project

```bash
cd backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

DB_NAME=smart_trip_db
```

---

## 5. Start Development Server

```bash
npm run dev
```

Server will start at:

```txt
http://localhost:5000
```

---

# API Base URL

```txt
http://localhost:5000/api
```

---

# Core API Endpoints

## User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/users/register | Register user |
| POST | /api/users/login | Login user |
| GET | /api/users/:userId | Get user profile |

---

## Trip APIs

| Method | Endpoint |
|---|---|
| POST | /api/trips |
| GET | /api/trips/:tripId |
| POST | /api/trips/participants |
| PATCH | /api/trips/:tripId/complete |

---

## Expense APIs

| Method | Endpoint |
|---|---|
| POST | /api/expenses |

---

## Settlement APIs

| Method | Endpoint |
|---|---|
| GET | /api/settlements/:tripId/balances |
| POST | /api/settlements |

---

## Budget APIs

| Method | Endpoint |
|---|---|
| GET | /api/budget/:tripId |

---

## Loyalty APIs

| Method | Endpoint |
|---|---|
| GET | /api/loyalty/:userId |

---

## AI APIs

| Method | Endpoint |
|---|---|
| POST | /api/ai/expense-breakdown |
| POST | /api/ai/budget-optimization |

---

## Place APIs

| Method | Endpoint |
|---|---|
| GET | /api/places/:destination |
| POST | /api/places/travel-advice |

---

## Vendor APIs

| Method | Endpoint |
|---|---|
| GET | /api/vendors |
| GET | /api/vendors/search |

---

## Support APIs

| Method | Endpoint |
|---|---|
| POST | /api/support |
| GET | /api/support/:tripId |
| PATCH | /api/support/status |

---

# Database Models

## User Model

Stores:
- name
- email
- password
- preferred currency
- loyalty information

Loyalty tracks:
- score
- tier
- total trips
- successful settlements

---

## Trip Model

Stores:
- trip details
- destination
- budget
- participants
- trip ownership
- trip status

---

## Expense Model

Stores:
- payer
- amount
- currency
- converted amount
- category
- split type

Supports:
- equal split
- unequal split
- percentage split

---

## Settlement Model

Stores:
- debtor
- creditor
- settlement amount
- settlement status

---

## Support Ticket Model

Stores:
- issue type
- support message
- ticket status
- trip reference

---

# Design Decisions

## Why ExpenseSplit Exists Separately

Expense splitting records are separated from the main expense document to support:
- multiple beneficiaries
- normalized ledger structure
- dynamic balance recomputation
- flexible split strategies
- better auditability

---

## Why Balances Are Computed Dynamically

Balances are derived from:
- expenses
- splits
- settlements

instead of storing permanent balance values.

Benefits:
- prevents inconsistencies
- improves data integrity
- simplifies recalculation

---

## Why Loyalty Is Embedded Inside User

Loyalty data is stored directly inside the User model because:
- loyalty belongs to the user domain
- avoids unnecessary joins
- simplifies retrieval
- sufficient for assignment scope

---

# Assumptions

- FX rates are mocked
- AI responses are simulated
- Vendor and place insights use static JSON
- Authentication is simplified
- No real payment gateway integration
- No production-grade security
- No external travel APIs

---

# Trade-Offs

- Rule-based AI instead of real ML
- Static datasets instead of live integrations
- Simplified authentication flow
- No caching layer
- No distributed architecture
- No real-time synchronization

---

# Future Improvements

Potential production enhancements:
- JWT authentication
- OpenAI/LLM integration
- Real travel APIs
- Event-driven architecture
- Notification system
- Recommendation engine
- Real-time collaboration

---

# Known Limitations

- Mock FX conversion
- Static travel/vendor datasets
- No rate limiting
- No file uploads
- No live AI integration
- No deployment configuration

---

# Testing

The project was tested using:
- Postman
- Manual API testing
- Edge-case validation

Test results are available in:

```txt
docs/api-results/
```

---

# Author

Vinay Kumar Patel
