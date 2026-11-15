const BASE_URL = "https://rockz.one/blog/"
const SEARCH   = BASE_URL + "searchBlog/"
const GET_BLOG = BASE_URL + "getBlog/"
const LOG_VIEW = BASE_URL + "logView/"

class API {
    static async searchBlog(search){
        try {
            const response = await fetch(SEARCH, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'query' : search }),
            })
            if (!response.ok) {throw new Error('Subscription failed')}
            return await response.json()
        } catch (error) {
            console.error('Error subscribing to blog:', error);
            throw error;
        }
    }
    static async getBlog(id){
        try {
            const response = await fetch(GET_BLOG+id, {
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