const response = (status, data, res) => {
    res.status(status).json(data)
}

module.exports = response;