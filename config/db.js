if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
} 
else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}