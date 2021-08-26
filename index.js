const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 80;
const pool = require('./db.js')
const app = express()
const upload = require('express-fileupload')
app.use(cors());
app.use(upload())
app.use(express.json())

app.get('/getLastPost', async (req, res) => {
    try {
        console.log('Getting last post...');
        let q = "SELECT * FROM posts WHERE id = (SELECT MAX(id) FROM posts);";
        const lastPost = await pool.query(q);
        console.log(lastPost.rows[0].imglink)
        res.send(lastPost.rows[0])
    } catch (e) {
        console.log(e); 
        res.sendStatus(500);
    }
})

app.get('/getOnePost/:guestname', async (req, res) => {
    try {
        let gn = req.params.guestname
        console.log(req.params.guestname)
        console.log('Getting the post' + gn)
        let q = "SELECT * FROM posts WHERE guestname = '" + gn + "'; "
        const onepost = await pool.query(q)
        // console.log(onepost)
        // console.log(onepost)
        console.log(onepost.rows)
        res.send(onepost.rows[0])
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

app.get('/getSomePosts/:page', async (req, res) => {
    try {
        let pg = req.params.page
        console.log(req.params.page)
        console.log('Getting the posts from ' + pg + ' page')

        let q = "SELECT * FROM posts;"
        const allPosts = await pool.query(q);
        console.log(allPosts.rows);
        let sendData = [];
        for (let i = pg; i < pg + 5; i++) {
            if (i > allPosts.rows.length) {
                console.log('BREAK')
                break; 
            }
            sendData.push(allPosts.rows[i - 1])


        }
        console.log(sendData)

        res.send(sendData);
        // res.sendStatus(200);

    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

// app.post('/sendPhoto', async (req, res) => {
//     const image = req.files.image.data
//     fetch('https://api.imgbb.com/1/upload', {
//         method: 'POST',
//         body: {
//             key: 'db91b7fca6802f82b4b5aa5462e5b0d4',
//             image: image,
//             name: 'wrotever'
//         }
//     })
// })

app.post('/login', async (req, res) => {
    

    try {
        console.log(req.body)
        console.log('login')

        if (req.body.Email === 'datasci@nu.edu.kz' && req.body.Password === 'loveds2021') {
            console.log('TRUE')
            res.send({isAuth: 'auth'})

        } else {
            console.log('FALSE')
            res.send({isAuth: 'notAuth'})
        }

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    

})




app.post('/foo', async (req, res) => {
    console.log(req.body)
    console.log(req.files)
})
app.post('/newPost', async (req, res) => {
    try {
        console.log('newpost')
         console.log(req.body)
         const {guestname, postname, description, youtubelink, imglink, imgdeletelink, guestnameru, postnameru, descriptionru} = req.body
                
         let q = "INSERT INTO posts (guestname, postname, description, youtubelink, imglink, imgdeletelink, guestnameru, postnameru, descriptionru) VALUES ('" + guestname + "', '" + postname + "', '" + description + "', '" + youtubelink + "', '" + imglink + "', '" + imgdeletelink +  "', '" + guestnameru + "', '" + postnameru + "', '" + descriptionru + "');"
        
         const newPost = await pool.query(q);
         res.json(newPost);
   } catch (e) {
        console.log(e);
        res.sendStatus(500);
        
    }
})

app.listen(PORT, () => {
    console.log('running on port ' + PORT);
})


