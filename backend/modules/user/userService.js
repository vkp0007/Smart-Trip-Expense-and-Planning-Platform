import { User }
from "./user.model.js";
import { generateToken }
from "../../config/generateToken.js";

const registerUser = async ({
    name,
    email,
    password,
    preferredCurrency
}) => {

    // STEP 1:
    // Check existing user

    const existingUser = await User.findOne({
            email
        });

    if (existingUser) {

        throw new Error(
            "User already exists"
        );
    }

    // STEP 2:
    // Create user

    const user =
        await User.create({

            name,

            email,

            password,

            preferredCurrency
        });

    return {

    _id: user._id,

    name: user.name,

    email: user.email,

    preferredCurrency:
        user.preferredCurrency,

    loyalty:
        user.loyalty,

    token:
        generateToken(
            user._id
        )
};
};

const loginUser = async ({
    email,
    password
}) => {

    // STEP 1:
    // Find user

    const user =
        await User.findOne({
            email
        });

    if (!user) {

        throw new Error(
            "Invalid email or password"
        );
    }

    // STEP 2:
    // Match password

    const isPasswordMatched =
        await user.matchPassword(
            password
        );

    if (!isPasswordMatched) {

        throw new Error(
            "Invalid email or password"
        );
    }

    return {

    _id: user._id,

    name: user.name,

    email: user.email,

    preferredCurrency:
        user.preferredCurrency,

    loyalty:
        user.loyalty,

    token:
        generateToken(
            user._id
        )
};
};

const getUserProfile = async (
    userId
) => {

    const user =
        await User.findById(userId)
            .select("-password");

    if (!user) {

        throw new Error(
            "User not found"
        );
    }

    return user;
};

export {

    registerUser,

    loginUser,

    getUserProfile
};