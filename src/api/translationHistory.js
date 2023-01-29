import {API_URL, createHeaders} from "./index";


export const clearTranslationHistory = async (userID) => {
    try {
        const response = await fetch(`${API_URL}/${userID}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        });
        if (!response.ok) {
            throw new Error("clearTranslationHistory: Could not clear translations of user with id " + userID);
        }
        const result = await response.json();
        return [null, result];
    } catch (error) {
        return [error.message, null];
    }
}

export const addTranslationToHistory = async (user, translation) => {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        });
        if (!response.ok) {
            throw new Error("addTranslationToHistory: Fail with adding translation to the user " + user);
        }
        const result = await response.json();
        return [null, result];
    } catch (error) {
        return [error.message, null];
    }
}