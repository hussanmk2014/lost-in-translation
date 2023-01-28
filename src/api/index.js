export const API_KEY = "49202471544530759446";
export const API_URL = "https://mercury-factual-bayberry.glitch.me/translations";

export const createHeaders = () => {
    return {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    };
};