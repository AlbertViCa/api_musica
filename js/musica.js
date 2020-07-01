const load = async () => {
	await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "8b108e759amsh413338b8e33b003p1cda13jsn270798ed74bb"
		}
	})
	.then(response => {
		console.log(response);
		return response.json();
	}).then(response => {
		console.log(response)
	})
	.catch(err => {
		console.log(err);
	});
}
load()