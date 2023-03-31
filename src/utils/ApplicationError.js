class ApplicationError extends Error {
    constructor(identifier, message, httpStatus, cause) {
        super();
        this.name = "ApplicationError";
        this.identifier = identifier;
        this.message = message;
        this.httpStatus = httpStatus;
        this.cause = cause;
    }
}

export default ApplicationError;