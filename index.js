const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket(process.env.BUCKET);

exports.getSignedUrl = (req, res) => {
  const file = bucket.file(req.query.file);

  config = {
    action: req.query.action,
    expires: process.env.EXPIRES,
  };

  file.getSignedUrl(config, function(err, url) {
    console.log(err);
    res.send(url);
  });
};
