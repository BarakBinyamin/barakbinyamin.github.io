const BASE_URL = "https://rockz.one/analytics/"
const LOG_VIEW = BASE_URL + "logView/"
const VIEWS    = BASE_URL + "views/"

class API {
    static async logView(url){
        try {
            const response = await fetch(LOG_VIEW, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'query' : url }),
            })
            if (!response.ok) {throw new Error('Subscription failed')}
            return await response.json()
        } catch (error) {
            console.error('Error subscribing to blog:', error);
            throw error;
        }
    }
    static async getViews(){
        try {
            const response = await fetch(VIEWS, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                }
            })
            if (!response.ok) {throw new Error('Subscription failed')}
            return await response.json()
        } catch (error) {
            console.error('Error subscribing to blog:', error)
            throw error;
        }
    }
}

export default API