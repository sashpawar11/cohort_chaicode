import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";


const healthCheckController = async (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Service is up and healthy!" }));
  } catch (error) {
    res
    .status(400)
      .json(new ApiError(404, 'Service is down, error occured!',  error));
  }
};

export default healthCheckController;
