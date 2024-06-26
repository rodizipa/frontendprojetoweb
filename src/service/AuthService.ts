import axios from "axios";
import {environment} from "../environment.ts";
import {handleError} from "../utilities/ErrorHandler.tsx";
import {UserProfileToken} from "../data/model/User.ts";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${environment.API_URL}/login`, {
      username: username,
      password: password
    });
    return data;
  } catch (err) {
    handleError(err);
  }
}

export const registerAPI = async (username: string, password: string, displayName: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${environment.API_URL}/account/register`, {
      username: username,
      displayName: displayName,
      password: password
    });
    return data;
  } catch (err) {
    handleError(err);
  }
}