import axios from "axios";

export const postDataToApi = async (apiData) => {
  try {
    const apiUrl = "http://localhost:9000/users/signup";
    console.log(apiData, "apiData");
    const headers = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer YourAuthToken', // Example: Bearer token
      // Add any other headers you need
    };
    const response = await axios.post(apiUrl, apiData,{headers});

    console.log("Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
