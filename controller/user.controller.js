const { userCreateService, userLogin } = require("../services/user.services");
const { sendWithGmail } = require("../utils/email");
const { generateToken } = require("../utils/token");

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await userCreateService(req.body);


    const mailData = {
      to:[result.email],
      subject:"verify email",
      text:"thank you"
    }

    sendWithGmail(mailData)
    res.status(200).json({
      status: true,
      message: "data  create",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data cant create",
      error: error,
    });
  }
};

/**
 * check if user email given
 * load user with email
 * if  not use sen res
 * compare password
 * if password not correct send res
 * check if user is active
 * if not active sen res
 * generate token
 * send token
 */

module.exports.logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        message: "please provide credential",
      });
    }

    const user = await userLogin(email);

    if (!user) {
      res.status(403).json({
        message: "please create account",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      res.status(403).json({
        message: "Password incorrect",
      });
    }
    if (user.status != "active") {
      res.status(401).json({
        message: "user doest active",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: true,
      message: "data  create",
      data: {
        user: others,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data cant create",
      error: error,
    });
  }
};

module.exports.getMe = async (req, res, next) => {
  try {
    const user = await userLogin(req.user?.email);
    res.status(200).json({
      status: true,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "data cant create",
      error: error,
    });
  }
};
