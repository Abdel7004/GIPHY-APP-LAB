// import useState
import {useState} from 'react'
import Button from './Button'

const Form = (props) => {
    // instantiate a new instance of state
    const [formData, setFormData] = useState({searchTerm: '', name: ''})
    // formData = {searchTerm: ''}

    // handleChange function to capture/update formData
    const handleChange = (event) => {
        console.log('event', event.target.name, event.target.value)
        // when you set state your create a brand new thing...
        // in our instance its a new object with all the previous key:values and the key we want to update
        setFormData({
            // [event.target.name] is a way to target an object key dynamically
            // you always spread the previous object first... then update specific key:value pairs
           ...formData, [event.target.name]: event.target.value
        })
    }

    // handleSubmit function will lift state up to App.js
    const handleSubmit = (event) => {
        // the natural behavior of a form is to refresh the page which we don't want to do
        // so we need to preventDefault
        event.preventDefault()
        // call the movieSearch function from App.js and pass it our formData
        props.giphySearch(formData.searchTerm)
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <Button url={props.url}/> */}
                <input
                    type='text'
                    name='searchTerm'
                    value={formData.searchTerm}
                    onChange={handleChange}
                />
                <Button/>
            </form>
        </div>
    );
}

export default Form;