const roundToTwo = (num) => {
  return Math.round(num * 100) / 100;
};

const optimizeSettlements = (balances) => {

  const creditors = [];
  const debtors = [];

  // Separate creditors and debtors

  Object.entries(balances).forEach(
    ([userId, balance]) => {

      const roundedBalance = roundToTwo(balance);

      if (roundedBalance > 0) {
        creditors.push({
          userId,
          amount: roundedBalance
        });
      }

      else if (roundedBalance < 0) {
        debtors.push({
          userId,
          amount: Math.abs(roundedBalance)
        });
      }
    }
  );

  const settlements = [];

  let creditorIndex = 0;
  let debtorIndex = 0;

  while (
    creditorIndex < creditors.length &&
    debtorIndex < debtors.length
  ) {

    const creditor =
      creditors[creditorIndex];

    const debtor =
      debtors[debtorIndex];

    const settlementAmount =
      Math.min(
        creditor.amount,
        debtor.amount
      );

    settlements.push({
      fromUserId: debtor.userId,

      toUserId: creditor.userId,

      amount: roundToTwo(
        settlementAmount
      )
    });

    creditor.amount = roundToTwo(
      creditor.amount - settlementAmount
    );

    debtor.amount = roundToTwo(
      debtor.amount - settlementAmount
    );

    // Creditor fully settled
    if (creditor.amount === 0) {
      creditorIndex++;
    }

    // Debtor fully settled
    if (debtor.amount === 0) {
      debtorIndex++;
    }
  }

  return settlements;
};

export {
  optimizeSettlements
};