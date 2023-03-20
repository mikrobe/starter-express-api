const router = require("express").Router();
const multer  = require('multer')
const upload = multer()

router.get('/',(req, res) => {

  console.log("received GET request");
  res.sendStatus(200);
})

router.post('/',(req, res) => {
  // handle incoming JSON data
  const pp_notification = req.body
  console.dir(pp_notification, {depth: null, colors: true})
  res.sendStatus(200);
});

router.get('/multi',(req, res) => {
  console.log("received GET request");
  res.sendStatus(200);
})

router.post('/multi', upload.none(), (req, res) => {
  // handle incoming JSON data
  const notification = req.body
  console.dir(notification, {depth: null, colors: true})
  res.sendStatus(200);
});

module.exports = router;