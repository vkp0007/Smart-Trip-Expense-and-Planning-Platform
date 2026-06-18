import { Expense } from "../../modules/expense/expense.model.js";
import { ExpenseSplit } from "../../modules/expense/expenseSplit.model.js";
import { Settlement } from "./settlement.model.js";
import { Trip } from "../../modules/trip/trip.model.js";
import { User }
from "../user/user.model.js";

import {
    calculateBalances
} from "./utils/balanceCalculator.js";

import {
    optimizeSettlements
} from "./utils/settlementOptimizer.js";

const getTripBalances = async (
  tripId
) => {

  // STEP 1:
  // Validate trip

  const trip =
    await Trip.findById(
      tripId
    );

  if (!trip) {

    throw new Error(
      "Trip not found"
    );
  }

  // STEP 2:
  // Fetch expenses

  const expenses =
    await Expense.find({
      tripId,
    });

  const expenseIds =
    expenses.map(
      (expense) =>
        expense._id
    );

  const expenseSplits =
    await ExpenseSplit.find({
      expenseId: {
        $in: expenseIds,
      },
    });

  const settlements =
    await Settlement.find({
      tripId,
    });

  // STEP 3:
  // Calculate balances

  const balances =
    calculateBalances({
      expenses,
      expenseSplits,
      settlements,
    });

  // STEP 4:
  // Suggested settlements

  const suggestedSettlements =
    optimizeSettlements(
      balances
    );

  // STEP 5:
  // Fetch users

  const userIds =
    Object.keys(
      balances
    );

  const users =
    await User.find({
      _id: {
        $in: userIds,
      },
    });

  const userMap = {};

  users.forEach(
    (user) => {

      userMap[
        user._id.toString()
      ] = user;
    }
  );

  // STEP 6:
  // Format balances

  const formattedBalances =
    users.map(
      (user) => ({

        userId:
          user._id,

        name:
          user.name,

        email:
          user.email,

        balance:
          balances[
            user._id.toString()
          ] || 0,
      })
    );

  // STEP 7:
  // Format settlements

  const formattedSettlements =
    suggestedSettlements.map(
      (
        settlement
      ) => ({

        fromUserId:
          settlement.fromUserId,

        fromName:
          userMap[
            settlement.fromUserId
          ]?.name,

        toUserId:
          settlement.toUserId,

        toName:
          userMap[
            settlement.toUserId
          ]?.name,

        amount:
          settlement.amount,
      })
    );

  // STEP 8:
  // Trip fully settled?

  const isSettled =
    formattedSettlements.length ===
    0;

  // STEP 9:
  // Return response

  return {

    balances:
      formattedBalances,

    suggestedSettlements:
      formattedSettlements,

    isSettled,
  };
};;

const createSettlement = async ({
    tripId,
    fromUserId,
    toUserId,
    amount,
    currency
}) => {

    // STEP 1:
    // Validate trip exists

    const trip = await Trip.findById(tripId);

    if (!trip) {
        throw new Error("Trip not found");
    }

    // STEP 2:
    // Prevent self settlement

    if (
        fromUserId.toString() ===
        toUserId.toString()
    ) {
        throw new Error(
            "Cannot settle with yourself"
        );
    }

    // STEP 3:
    // Create settlement record

    const settlement =
        await Settlement.create({
            tripId,
            fromUserId,
            toUserId,
            amount,
            currency
        });

    return settlement;
};

export {
    getTripBalances,
    createSettlement
};