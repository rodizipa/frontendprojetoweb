import axios from "axios";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;
  if (Array.isArray(err?.data.errors) && err?.data.errors.length > 0) {
    console.error(err?.data.errors);
    return;
  }

  return console.error(err?.data.error);
  }
}