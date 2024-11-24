const R = require("../utils/responseHelper");
const authModal = require("../models/authmodels");
const trans = require("../models/transaction");
const withdrawalModel = require("../models/withdrawalmodel");
wallet = {};

wallet.transactions = async (req, res, next) => {
  try {
    const data = req.body;
    data["userId"]=req.doc.userId;
    console.log(data);
    if (!data) {
      return R(res, false, "Amount is required", "", 400);
    }
    const amount = await authModel.transaction(data);

    if (!amount) {
      return R(res, false, "amount will not withdrawal", "", 400);
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
     
    return R(res, false, err.message, "", 500);
  }
};

wallet.listTransactions=async (req,res,next)=>{
  try {
    const userId = req.doc.userId;
    const transactions = await trans.list(userId);
    if (!transactions) {
      return R(res, false, "No transactions found", "", 404);
    }
    return R(res, true, "Transactions fetched successfully", transactions, 200);
  } catch (err) {
    console.log(err);
    return R(res, false, err.message, "", 500);
  }
}
module.exports = wallet;