export const success_response = (res, data) => {
    res.status(200).json(data);
};
export const bad_request_response = (res, message) => {
    res.status(400).send({
        'success': false,
        'message': message || 'Bad Request.'
    });
};
export const error_response = (res, message) => {
    res.status(500).send({
        'success': false,
        'message': message || "Internal Server Error."
    });
};