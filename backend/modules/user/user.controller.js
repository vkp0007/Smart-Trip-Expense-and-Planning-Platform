import {

    registerUser as registerUserService,

    loginUser as loginUserService,

    getUserProfile as getUserProfileService

}
from "./userService.js";

const registerUser = async (
    req,
    res
) => {

    try {

        const user =
            await registerUserService(
                req.body
            );

        return res.status(201).json({

            success: true,

            message:
                "User registered successfully",

            data: user
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const loginUser = async (
    req,
    res
) => {

    try {

        const user =
            await loginUserService(
                req.body
            );

        return res.status(200).json({

            success: true,

            message:
                "Login successful",

            data: user
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

const getUserProfile = async (
    req,
    res
) => {

    try {

        const { userId } =
            req.params;

        const user =
            await getUserProfileService(
                userId
            );

        return res.status(200).json({

            success: true,

            data: user
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

export {

    registerUser,

    loginUser,

    getUserProfile
};