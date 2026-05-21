const roundToTwo = (num) => {
    return Math.round(num * 100) / 100;
};

const calculateBalances = ({ expenses, expenseSplits, settlements }) => {

    const balances = {};

    // STEP 1:
    // Add total paid by each user

    expenses.forEach((expense) => {

        const payerId = expense.payerId.toString();

        if (!balances[payerId]) {
            balances[payerId] = 0;
        }

        balances[payerId] += expense.convertedAmount;
    });

    // STEP 2:
    // Subtract total owed by each user

    expenseSplits.forEach((split) => {

        const userId = split.userId.toString();

        if (!balances[userId]) {
            balances[userId] = 0;
        }

        balances[userId] -= split.amountOwed;
    });

    // STEP 3:
    // Apply settlements

    settlements.forEach((settlement) => {

        const fromUserId =
            settlement.fromUserId.toString();

        const toUserId =
            settlement.toUserId.toString();

        const amount = settlement.amount;

        // Debtor paid money
        if (!balances[fromUserId]) {
            balances[fromUserId] = 0;
        }

        balances[fromUserId] += amount;

        // Creditor received money
        if (!balances[toUserId]) {
            balances[toUserId] = 0;
        }

        balances[toUserId] -= amount;
    });

    // STEP 4:
    // Round balances

    Object.keys(balances).forEach((userId) => {
        balances[userId] = roundToTwo(balances[userId]);
    });

    return balances;
};

export  {
    calculateBalances
};