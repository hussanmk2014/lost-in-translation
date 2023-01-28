import { createHeaders } from "./index";
export const API_KEY = "49202471544530759446";
export const API_URL = "https://mercury-factual-bayberry.glitch.me/translations";

export const checkUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}?username=${username}`);
        if (!response.ok) {
            throw new Error("Could not check user.");
        }
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
};


export const createUser = async (username) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })

        });
        if (!response.ok) {
            throw new Error("Could not create user with username " + username);
        }
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
};


export const loginUser = async (username) => {
    const [error, user] = await checkUser(username);
    if (user.length > 0) {
        return [null, user.pop()];
    }

    if (error !== null) {
        return [error, null];
    }

    return await createUser(username);
};
