const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500
    res
    .status(statusCode)
    .json({
        message: err.message,
        stackTrace: err.stack,
    })
}

export { errorHandler }
