import fs from "fs"
import connection from "../db.js";
import bcrypt from "bcrypt"
const saltRounds = 10

export const join = (req,res) => {
    fs.readFile('view/join.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.send(data);
    });
}

export const registerUser = (req, res) => {
    const { username, email, password } = req.body;

    const insertQuery = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';
    bcrypt.hash(password,saltRounds,(error,hash)=>{ // 비밀번호 암호화
        if (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }

        connection.query(insertQuery, [username, email, hash], (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }

            console.log('User registered successfully');
            res.status(200).send('User registered successfully');
        });
    })
    
};

export const login = (req,res) => {
    fs.readFile('view/login.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(data);
    });
}

export const loginUser = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    if (username && password) {
        const selectQuery = 'SELECT * FROM user WHERE username = ?';

        connection.query(selectQuery, [username], (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }

            if (result.length > 0) {
                const hashedPassword = result[0].password;

                bcrypt.compare(password, hashedPassword, (compareError, match) => {
                    if (compareError) {
                        console.error(compareError);
                        return res.status(500).send('Internal Server Error');
                    }

                    if (match) {
                        console.log("로그인 성공");
                        return res.status(200).send('Login successful');
                    } else {
                        console.log("비밀번호가 일치하지 않습니다.");
                        return res.status(401).send('Incorrect password');
                    }
                });
            } else {
                console.log("아이디 정보가 일치하지 않습니다.");
                return res.status(401).send('Incorrect username');
            }
        });
    } else {
        console.log("아이디와 비밀번호를 입력하세요");
        return res.status(400).send('Username and password are required');
    }
};


export const see = (req,res) => {
    return res.send("See Users");
}

export const edit = (req,res) => {
    return res.send("Edit Users")
}

export const remove = (req,res) => {
    return res.send("Delete Users")
}