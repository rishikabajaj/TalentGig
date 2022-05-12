require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

aws_access_key_id = 'AKIAYA36YO7YMVUXTIGG'
aws_secret_access_key = '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'
aws_bucket_name = 'battles-files'
aws_bucket_region = "us-east-1"

const bucketName = aws_bucket_name;
const region = aws_bucket_region;
const accessKeyId = aws_access_key_id;
const secretAccessKey = aws_secret_access_key;

const s3 = new S3({  
    region,  
    accessKeyId,  
    secretAccessKey,});

    // UPLOAD FILE TO S3

global.u = "";

function uploadFile(file) {  
    const fileStream = fs.createReadStream(file.path);  
  
    const uploadParams = {    
        Bucket: bucketName,    
        Body: fileStream,    
        Key: file.filename,  
    };
    //return s3.upload(uploadParams).promise(); // this will upload file to S3
    s3.upload(uploadParams, function (s3Err, data) {
        if (s3Err) throw s3Err;
        global.u = `${data.Location}`.toString();
        //console.log(u);
        return global.u;
      });
      //return global.u;
}

module.exports = { uploadFile };