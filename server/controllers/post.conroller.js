import postModel from '../models/posts.model.js';

export const getPosts = async (req, res) => {
 
    try {
        const postsModel = await postModel.find();
        res.status(200).json(postsModel);
        //res.status(200).json(["majid"]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
     
};

export const createPost = async(req, res) => {
    const add = req.body;
    //const newAdd =  await postModel(add);
    const newAdd =  await postModel({title: "loi"});
    try {
        await newAdd.save();
        res.status(201).json(newAdd);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }

}