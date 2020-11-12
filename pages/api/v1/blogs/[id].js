import BlogApi from "@/lib/api/blogs";
import auth0 from "@/utils/auth0";

export default async function getBlogById (req, res) {
    if(req.method === 'GET') {
        try{
            const { accessToken } = await auth0.getSession(req);
            const blog = await new BlogApi(accessToken).getById(req.query.id);
            return res.status(200).json(blog.data);
        }catch(e){
            console.log('Error message here!');
            return res.status(e.status || 400).end(e.message || "Somthing went wrong!");
        }
    }

    if(req.method === "PATCH"){ 
        try{
            const { accessToken } = await auth0.getSession(req);
            const result = await new BlogApi(accessToken).updateById(req.query.id, req.body);
            return res.json(result.data);
        } catch (e) {
            return res.status(e.status || 422).json(e.response.data);
        }
    }
    
}