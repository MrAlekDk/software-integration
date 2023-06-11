import 'dotenv/config';

console.log(process.env.SECRET_VALUE);

if (process.env.NODE_ENV === "Test"){
    console.log("This is a test environment");
};