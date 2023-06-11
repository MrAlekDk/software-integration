import express from "express";
import multer from "multer";
const app = express();

const PORT = 8000;

app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb)=>{
        const filenameParts = file.originalname.split(".");
        if ( filenameParts.length <=1){
            cb(new Error("File has no extension: " + file.originalname));
        }

        const extension = filenameParts.pop();
        const originalFileName= filenameParts.join(".")
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9);

        const newFileName = uniqueSuffix + "__" + originalFileName + "." + extension;

        cb(null, newFileName);
    }
});
const upload = multer({ storage });

app.post("/bForm", (req,res)=>{
    console.log(req.body);
    res.send({data: req.body});
})

app.post("/fileForm", upload.single("file"), (req, res)=>{
    console.log(req.file);
    res.send({data: req.body});
})


app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});