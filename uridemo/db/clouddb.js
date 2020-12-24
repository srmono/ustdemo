// /**
//  * Setup the Database URL
//  */

const DB_USER = "venkat";
const DB_PASSWORD = "ust123456";
const DB_NAME = "acmetravel";
const CLUSTER_HOST = "apidemo.xiijf.mongodb.net";

//DB Connection String
//mongodb+srv://venkat:<password>@apidemo.xiijf.mongodb.net/<dbname>?retryWrites=true&w=majority

exports.DB_URI= `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

