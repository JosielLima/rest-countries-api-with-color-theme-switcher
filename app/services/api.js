const ApiClient = (baseUrl) => ({
    async get(endpoint) {
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`)
            if (!response.ok) {
                return [null, `HTTP error! status: ${response.status}`]
            }
            const data = await response.json()
            return [data, null]
        } catch (error) {
            return [null, error.message]
        }
    }
})

const apiClient = ApiClient('https://restcountries.com/v3.1')

const countriesApi = {
    getAll: () => apiClient.get('all?fields=cca3,flags,name,capital,region,population'),
    getCountry: (id) => apiClient.get(`alpha/${id}?fields=cca3,flags,name,capital,region,population,subregion,languages,currencies,tld,borders`)
}

export { countriesApi }