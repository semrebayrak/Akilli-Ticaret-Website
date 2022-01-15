export const handleServiceResult = (_serviceResult) => {
    let serviceResult = {
        
    };
    return serviceResult;
}

export const getServiceErrorMessage = (errorResponse) => {
    let message = "Undefined Service Error. Please Contact Us.";
    if (!errorResponse)
        return message;
    if (errorResponse.data) {
        let errorResponseData = errorResponse.data;
        if (errorResponseData.messages && errorResponseData.messages.length > 0){
            message = errorResponseData.messages[0].description;
        }
    } else
        message = errorResponse.status + " - " + errorResponse.statusText;

    return message;
}
