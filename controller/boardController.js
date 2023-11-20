import fs from "fs"

export const home = (req,res) => {
    fs.readFile('view/main.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(data);
    });
}

export const search = (req,res) => {
    return res.send("Search");
}

export const seeBoard = (req,res) => {
    return res.send("See Board")
}

export const editBoard = (req,res) => {
    return res.send("Edit Board")
}

export const deleteBoard = (req,res) => {
    return res.send("Delete Board");
}

export const writeBoard = (req,res) => {
    return res.send("Write Board");
}


