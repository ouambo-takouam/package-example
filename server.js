const axios = require('axios');

axios
	.get('https://www.wordpressbadass.com')
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
