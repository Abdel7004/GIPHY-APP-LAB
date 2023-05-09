import { useState, useEffect } from 'react';
import './App.css';
import GiphyDisplay from './components/GiphyDisplay';
import Form from './components/Form';

function App() {
	const [giphy, setGiphy] = useState(null);
  const apiKey = '91fD7F6n9CDGm1yY9G76y9kgt9JCcrpA';

  // function to fetch movie data
  // searchTerm is formData from Form.js
  const getGiphy = async (searchTerm) => {
    // make the fetch request and store results in response
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`
    )
    // parse the returned JSON 
    const data = await response.json()
    setGiphy(data)
  }

  // useEffect will run on initial render and whenever movie changes
  useEffect(() => {
    getGiphy('happy')
    // the empty [] is a dependency array and when empty this code runs once when the component mounts
  }, [])


  // everything in this return is JSX..js & xml
	return (
		<div className='App'>
			{/* pass the getMovie function to MovieDisplay */}
			<Form  giphySearch={getGiphy} />
			<GiphyDisplay giphy={giphy}/>
		</div>
	);
}

export default App;