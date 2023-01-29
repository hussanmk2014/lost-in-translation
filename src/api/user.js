import {API_URL, createHeaders} from "./index";


export const checkUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}?username=${username}`);
        if (!response.ok) {
            throw new Error("Fail with checking the user.");
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
            throw new Error("Fail with creating user with username " + username);
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


export const getUserByID = async (userID) => {
    try {
        const response = await fetch(`${API_URL}/${userID}`);
        if (!response.ok) {
            throw new Error("Fail with fetching user.")
        }
        const user = await response.json();
        return [null, user];
    } catch (error) {
        return [error.message, null];
    }
};