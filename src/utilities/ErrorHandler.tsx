import axios from "axios";

export const handleError = (error: unknown) => {
  if  (error.data.status === 403 || error.data.status === 401) {
    logout();
  }
  if (axios.isAxiosError(error)) {
    const err = error.response;
  if (Array.isArray(err?.data.errors) && err?.data.errors.length > 0) {
    console.error(err?.data.errors);
    return;
  }

  return console.error(err?.data.error);
  }
}