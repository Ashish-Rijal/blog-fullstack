import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Configure the express server
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Connect the database
try {
  mongoose.connect(
    "mongodb+srv://newsunm4:ztu5QJxAN0suLqMg@cluster0.5ewctwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected suceessfully");
} catch (error) {
  console.log("Database Connection failed");
}

app.get("/", (req, res) => {
  res.send("hello from blog server nodemon test");
});

// blog schema
const blogSchemaa = new mongoose.Schema({
  titile: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  authorName: { type: String, required: true },
  categoryName: { type: String, required: false },
  timeToRead: { type: Number, required: true },
});
const Blog = mongoose.model("Blog", blogSchemaa);

// writer schema
const writerSchemaa = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  address: { type: String, required: false, unique: false },
  age: { type: Number, required: true, unique: false },
});

// write table
const Writer = mongoose.model("Writer", writerSchemaa);

// Feature schema
const featureSchemaa = new mongoose.Schema({
  title: { type: String, required: true, unique: true },

  description: { type: String, required: false, unique: false },
});

// write table
const Feature = mongoose.model("Feature", featureSchemaa);

// Routes
// 1. create a new blog.
app.post("/create-blog", async (req, res) => {
  try {
    // console.log(req, "this is request")
    // console.log(req.body, "this is body")

    // check the title already taken ot not
    const blogExist = await Blog.findOne({ titile: req.body.titile });
    if (blogExist) {
      return res.status(409).json({
        success: false,
        msg: "blog with this title already esixt, please choose another title",
        data: null,
      });
    }

    const createdBlog = await Blog.create(req.body);
    return res.status(201).json({
      success: true,
      msg: "Blog created successfully",
      data: createdBlog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 2. Get all blogs
app.get("/get-all-blog", async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    return res.status(200).json({
      success: true,
      msg: "All blog featched successfully",
      data: allBlogs,
    });
  } catch (error) {
    console.log("opps Something went wrong");
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// 3. Get Single blog
app.get("/get-single-blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        sucess: false,
        msg: "Blog not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "single blog fetched seccessfully",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      msg: "opps! Smething went wrong",
      data: null,
      error: error,
    });
  }
});

// 4. Update a blog
app.patch("/update-blog/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      msg: "update seccess",
      data: updatedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      msg: "opps! Smething went wrong",
      data: null,
      error: error,
    });
  }
});

//  5. Delate blog
app.delete("/delete-blog/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        msg: "Blog Not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Blog deleted successfully",
      data: deletedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      msg: "opps! Smething went wrong",
      data: null,
      error: error,
    });
  }
});

// writer Routes
// 1.create
app.post("/create-writer", async (req, res) => {
  try {
    // Check email taken or not
    const emailAddressMatch = await Writer.findOne({
      emailAddress: req.body.emailAddress,
    });
    if (emailAddressMatch) {
      return res.status(409).json({
        success: false,
        msg: "Email already taken please take another email",
        data: null,
      });
    }

    // Check phone taken or not
    const phoneMatch = await Writer.findOne({ phone: req.body.phone });
    if (phoneMatch) {
      return res.status(409).json({
        success: false,
        msg: "Email already taken please take another email",
        data: null,
      });
    }

    const writer = await Writer.create(req.body);
    return res.status(201).json({
      sucess: true,
      msg: "create success",
      data: writer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "create failed",
      data: null,
      error: error,
    });
  }
});

// 2.fetch all
app.get("/get-all-writer", async (req, res) => {
  try {
    const allWriter = await Writer.find();
    return res.status(200).json({
      success: true,
      msg: "Fetvh all writer success",
      data: allWriter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Fetch all writer failed",
      data: null,
      error: error,
    });
  }
});

// 3. fetch one
app.get("/get-single-writer/:id", async (req, res) => {
  try {
    const fetchedWriter = await Writer.findById(req.params.id);

    if (!fetchedWriter) {
      return res.status(404).json({
        success: false,
        msg: "Not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "get one sucess",
      data: fetchedWriter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Failed to Fetch single writer",
      data: null,
      error: error,
    });
  }
});

// 4. Update weite
app.patch("/update-writer/:id", async (req, res) => {
  try {
    const updatedWriter = await Writer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedWriter) {
      return res.status(404).json({
        success: false,
        msg: "Writer with this id dosenot found",
        data: null,
      });
    }

    return res.status(200).json({
      sucess: true,
      msg: "Updated success",
      data: updatedWriter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "failed to update",
      data: null,
      error: error,
    });
  }
});

// 5. delete writer
app.delete("/delete-writer/:id", async (req, res) => {
  try {
    const deletedWriter = await Writer.findByIdAndDelete(req.params.id);

    if (!deletedWriter) {
      return res.status(404).json({
        success: false,
        msg: "Writer with this id dosenot exist",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Delete seccess",
      data: deletedWriter,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "failed to delete",
      data: null,
      error: error,
    });
  }
});




// Feature Routes
// 1. Create
app.post("/create-feature", async (req,res)=>{
  try {

    const featureExist = await Feature.findOne({title: req.body.title});
    if (featureExist) {
      return res.status(409).json ({
        sucess:false,
        msg:"This Title is already Taken, plz choose another title",
        data: null,

      });
    }

    const feature= await Feature.create(req.body);
    return res.status(201).json ({
      succes:true,
      msg:"Create Success",
      data:feature,
    })
  } catch (error) {
    return res.status(500).json({
      Succes:false,
      msg:"Crreate Failed",
      data:null,
      error:error,
    });
  }
});


// 2. Fetch all
app.get ("/get-all-feature", async (req,res)=>{});

// 3. Fetch one
app.get("get-single-feature/:id", async (req,res)=>{});

// 4. update feature
app.patch("/update-feature/:id", async(req,res)=>{});

// 5.Delete Feature
app.delete("/delete-feature/:id", async(req,res)=>{});





app.listen(4000, () => {
  console.log("Blog Server is running at port 4000");
});