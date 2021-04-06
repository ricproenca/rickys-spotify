export const setAccessTokenParams = (
  access_token,
  expires_in,
  token_type,
  expiryTime
) => {
  try {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expires_in", expires_in);
    localStorage.setItem("token_type", token_type);
    localStorage.setItem("expiry_time", expiryTime);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAccessTokenParams = () => {
  try {
    return {
      access_token: localStorage.getItem("access_token"),
      expires_in: localStorage.getItem("expires_in"),
      token_type: localStorage.getItem("token_type"),
      expiry_time: localStorage.getItem("expiry_time")
    };
  } catch (err) {
    return null;
  }
};

export const isValidSession = () => {
  try {
    const currentTime = new Date().getTime();
    const expirationTime = localStorage.getItem("expiry_time");
    const isSessionValid = currentTime < expirationTime;

    return isSessionValid;
  } catch (err) {
    return null;
  }
};
