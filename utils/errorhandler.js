class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
    //captureStackTrace it is used to point the line
    // on which the error occured by using
    // .stack in middleware
  }
}

export default ErrorHandler;
