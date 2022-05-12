const fs = require("fs");
const AWS = require("aws-sdk");

aws_access_key_id = "AKIAYA36YO7YMVUXTIGG";
aws_secret_access_key = "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";
aws_bucket_name = "battles-files";

const s3 = new AWS.S3({
  accessKeyId: aws_access_key_id,
  secretAccessKey: aws_secret_access_key,
});

var filename = "img1.jpg";
var fileContent = fs.readFileSync(filename);

const uploadFile = async () => {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    const params = {
      Bucket: aws_bucket_name,
      Key: `${filename}`,
      Body: JSON.stringify(data, null, 2),
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      var u = `${data.Location}`.toString();
      console.log(u);
    });
  });
};

module.exports = { uploadFile };
