const roundToTwo = (num) => {
  return Math.round(num * 100) / 100;
};

const calculateEqualSplit = ({
  amount,
  participants
}) => {

  if (!participants || participants.length === 0) {
    throw new Error("Participants are required");
  }

  const totalParticipants = participants.length;

  const splitAmount = roundToTwo(
    amount / totalParticipants
  );

  const splits = participants.map((userId) => ({
    userId,
    amountOwed: splitAmount
  }));

  // Handle rounding remainder
  const totalCalculated =
    splitAmount * totalParticipants;

  const remainder = roundToTwo(
    amount - totalCalculated
  );

  if (remainder !== 0) {
    splits[splits.length - 1].amountOwed =
      roundToTwo(
        splits[splits.length - 1].amountOwed +
        remainder
      );
  }

  return splits;
};

const calculateUnequalSplit = ({
  amount,
  splits
}) => {

  if (!splits || splits.length === 0) {

    throw new Error(
      "Splits are required"
    );
  }

  const total = splits.reduce(

    (sum, split) =>

      sum + split.amountOwed,

    0
  );

  if (
    roundToTwo(total) !==
    roundToTwo(amount)
  ) {

    throw new Error(
      "Split amounts must equal total expense amount"
    );
  }

  return splits.map((split) => ({

    userId: split.userId,

    amountOwed: roundToTwo(
      split.amountOwed
    )
  }));
};

const calculatePercentageSplit = ({
  amount,
  splits
}) => {

  if (!splits || splits.length === 0) {
    throw new Error("Splits are required");
  }

  const totalPercentage = splits.reduce(
    (sum, split) => sum + split.percentage,
    0
  );

  if (roundToTwo(totalPercentage) !== 100) {
    throw new Error(
      "Total percentage must equal 100"
    );
  }

  const calculatedSplits = splits.map((split) => ({
    userId: split.userId,

    percentage: split.percentage,

    amountOwed: roundToTwo(
      (amount * split.percentage) / 100
    )
  }));

  // Handle rounding remainder
  const totalCalculated = calculatedSplits.reduce(
    (sum, split) => sum + split.amountOwed,
    0
  );

  const remainder = roundToTwo(
    amount - totalCalculated
  );

  if (remainder !== 0) {
    calculatedSplits[
      calculatedSplits.length - 1
    ].amountOwed = roundToTwo(
      calculatedSplits[
        calculatedSplits.length - 1
      ].amountOwed + remainder
    );
  }

  return calculatedSplits;
};
export  {
  calculateEqualSplit,
  calculateUnequalSplit,
  calculatePercentageSplit
};