import PortfolioApi from "@/lib/api/portfolios";
import auth0 from "@/utils/auth0";

export default async function createPortfolio (req, res) {
    try{
        const { accessToken } = await auth0.getSession(req);
        await new PortfolioApi(accessToken).create(req.body);
        res.status(200).json({ message: "Portfolio was created" });
    }catch(e){
        console.log('Error message here!');
        res.status(e.status || 400).end(e.message);
    }
}