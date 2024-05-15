import { Request, Response } from "express";
import { authenticate } from "../utility/otpless";
const dotenv = require("dotenv")


dotenv.config(); // Load environment variables from .env file

export const authenticateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { token } = req.body;
        const clientId = process.env.CLIENT_ID as string;
        const clientSecret = process.env.CLIENT_SECRET as string;
        const authUrl = process.env.AUTH_URL as string;

        if (!token || !clientId || !clientSecret || !authUrl) {
            res.status(400).json({ success: false, error: 'Missing required parameters' });
            return;
        }

        const result = await authenticate(token, authUrl, clientId, clientSecret);
        console.log(result);
        res.json({ success: true, data: result.data });
    } catch (error) {
        console.error('Error in authentication request:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};