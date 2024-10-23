const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        console.log("An error occurred : ", error);
        next(error);
    });
}

module.exports = catchAsync;