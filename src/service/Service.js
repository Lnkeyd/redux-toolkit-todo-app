export const useHttpRequest = () => {
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const res = await fetch(url, {method, body, headers})

            if (!res.ok) {
                throw new Error(`Couldn't fetch url ${url} with status ${res.status}`)
            }
            const data = await res.json()
            return data
        } catch (error) {
            throw error
        }
        //eslint-disable-next-line
    }

    return {request}
}