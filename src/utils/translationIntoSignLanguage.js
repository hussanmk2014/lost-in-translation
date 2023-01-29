export const translateToSignLanguage = (text) => {
    let words = text.trim().replace(/[^a-zA-Z ]+/g, '').split(" ");
    let translated = [];
    for (const word of words) {

        if (word === "") {
            continue;
        }
        let signWord = [];
        for (const char of word) {
            signWord.push(getSignSource(char));
        }
        translated.push(signWord);
    }
    return translated;
};

const getSignSource = (char) => {
    let path = `${process.env.PUBLIC_URL}/img/individual_signs/`;
    let signsByPictures = {
        "a": "a.png",
        "b": "b.png",
        "c": "c.png",
        "d": "d.png",
        "e": "e.png",
        "f": "f.png",
        "g": "g.png",
        "h": "h.png",
        "i": "i.png",
        "j": "j.png",
        "k": "k.png",
        "l": "l.png",
        "m": "m.png",
        "n": "n.png",
        "o": "o.png",
        "p": "p.png",
        "q": "q.png",
        "r": "r.png",
        "s": "s.png",
        "t": "t.png",
        "u": "u.png",
        "v": "v.png",
        "w": "w.png",
        "x": "x.png",
        "y": "y.png",
        "z": "z.png",
    }
    let signPictureName = signsByPictures[char.toLowerCase()];
    if (!signPictureName) {
        throw new Error(`Wrong letter - ${char}. Please use just English letters`);
    }

    return path + signPictureName;
};