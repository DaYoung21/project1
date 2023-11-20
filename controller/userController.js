import fs from "fs"

export const join = (req,res) => {
    fs.readFile('view/join.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(data);
    });
}

export const login = (req,res) => {
    fs.readFile('view/login.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(data);
    });
}

export const see = (req,res) => {
    return res.send("See Users");
}

export const edit = (req,res) => {
    return res.send("Edit Users")
}

export const remove = (req,res) => {
    return res.send("Delete Users")
}