import mongoose from 'mongoose';
const postSchema=new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type: String,
            required: true,
            unique: true,
        },
        image:{
            type:String,
            default:null,
        },
        category:{
            type:String,
            default:'uncategorized',
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },

    },
    {
        timestamps: true  // Saves
    }
);

const Post=mongoose.model('Post',postSchema);

export default Post;