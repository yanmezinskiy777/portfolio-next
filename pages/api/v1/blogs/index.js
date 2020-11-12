import BlogApi from "@/lib/api/blogs";
import auth0 from "@/utils/auth0";

export default async function createPortfolio (req, res) {
    try{
        const { accessToken } = await auth0.getSession(req);
        const blog = await new BlogApi(accessToken).create(req.body);
        return res.status(200).json(blog.data);
    }catch(e){
        console.log('Error message here!');
        return res.status(e.status || 400).end(e.message || "Somthing went wrong!");
    }
}