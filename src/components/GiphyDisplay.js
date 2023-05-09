// props = {movie: {Title: 'Star Wars'}}
const GiphyDisplay = ({giphy}) => {
	console.log(giphy)
    // JSX can only return a single parent but it can have as many children as needed
	const loaded = () => {
		return (
			// <div>
			// 	<h1>{giphy.type}</h1>
			// 	<h2>{giphy.rating}</h2>
			// 	<img src={giphy.url} alt={giphy.title} />
			// 	<h2>{giphy.username}</h2>
			// </div>
			<div>
			<h1>{giphy.data[0].title}</h1>
			<h2>{giphy.data[0].rating}</h2>
			<img src={giphy.data[0].images.original.url} alt={giphy.data.title} />
			<h2>{giphy.data[0].username}</h2>
		  </div>
		);
	}

	const loading = () => {
		return <h1>No Giphy to display</h1>
	}

	return giphy ? loaded() : loading()
};

export default GiphyDisplay;