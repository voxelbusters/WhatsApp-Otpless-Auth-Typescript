import axios from "axios";

interface AuthenticateResponse {
    success: boolean;
    data?: any;
}

export async function authenticate(token: string, authUrl: string, clientId: string, clientSecret: string): Promise<AuthenticateResponse> {
    try {
        const data = new URLSearchParams();
        data.append('token', token);
        data.append('client_id', clientId);
        data.append('client_secret', clientSecret);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const response = await axios.post(authUrl, data, config);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error calling authentication service:', error);
        throw new Error('Authentication failed');
    }
}