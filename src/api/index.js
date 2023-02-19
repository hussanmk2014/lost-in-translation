export const API_KEY = "eG6pRO9iob5G3I8YyttNFCC7Ns2B5XZxreFbTAKGYyiW78lMz6AMfegex4QsYgx9";
export const API_URL = "https://mercury-factual-bayberry.glitch.me/translations";


export const createHeaders = () => {
    return {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    };
};