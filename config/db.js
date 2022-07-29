if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb+srv://simei:simei1234@cluster0.zqxjzit.mongodb.net"}
} 
else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}