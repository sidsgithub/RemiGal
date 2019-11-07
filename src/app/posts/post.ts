export class Post {
    id?:string;
    title:String;
    author: String;
    authorId:String;
    content:String;
    image: String;
    published:Date; 
    // comments:Array<String>; it will contain the comments associated with the post.
                                // the array will store the comment id of the comment.

}
