const R = require("../utils/responseHelper");
const authModal = require("../models/authmodels");
const trans = require("../models/transaction");
const withdrawalModel = require("../models/withdrawalmodel");
wallet = {};

wallet.transactions = async (req, res, next) => {
  try {
    const data = req.body;
    data["userId"]=req.doc.userId;
    if (!data) {
      return R(res, false, "Amount is required", "", 400);
    }
    const amount = await authModel.transaction(data);

    if (!amount) {
      return R(res, false, "amount will not withdrawal", "", 404);
    }

    const withdrawal = await withdrawalModel.add(data);
    if (!withdrawal) {
      return R(res, false, "withdrawal not done", "", 404);
    }
    const transactions = await trans.add(data);
    if (!transactions) {
      return R(res, false, "transcation not done", "", 404);
    }

    return R(res, true, "transactions done Successfully", "", 200);
  } catch (err) {
    console.log(err);
    return R(res, false, err.message, "", 500);
  }
};
module.exports = wallet;