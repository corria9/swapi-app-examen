import axios from 'axios'
const url = 'https://swapi.dev/api/people'

class Requests {
	static async getCharacters(page = 1, search = '') {
		try {
			const res = await axios.get(`${url}/?page=${page}&search=${search}`)
			return res.data
		} catch (error) {
			console.error(error)
		}
	}
}

export default Requests
