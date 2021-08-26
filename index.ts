const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 80;
const pool = require('./db.js')
const app = express()
const upload = require('express-fileupload')
app.use(cors());
app.use(upload())
app.use(express.json())

app.get('/getLastPost', (req, res) => {
    try {

    } catch (e) {

    }
})

app.post('/newPost', async (req, res) => {
    try {
         console.log(req.files);
         console.log(req.body);
         const {guestname, postname, description, youtubelink, image, guestnameru, postnameru, descriptionru} = req.body
    
         const newPost = await pool.query(`INSERT INTO posts VALUES (&{guestname}, &{postname}, &{description}, &{youtubelink}, &{image}, &{guestnameru}, &{postnameru}, &{descriptionru})`);
         res.json(newPost);
   } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log('running on port ' + PORT);
})

