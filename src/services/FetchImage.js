export default function FetchImage(searchImage, page = 1) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '19136098-9af9f23d9dd8880169b991a94';
    return fetch(`${BASE_URL}?q=${searchImage}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Sorry, the ${searchImage} you entered does not exist!`));
        })
}