export const errorMiddleware = (error, req, res, next) => {
    const errMessage = error.message ||= "";
    const errStatusCode = error.statusCode ||= 500;
    return res.status(errStatusCode).json({
        success: false,
        message: errMessage,
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
