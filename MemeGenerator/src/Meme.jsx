import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Meme() {
    
    const [memeText, setMemetext] = useState({
        topText: "",
        bottomText: "",
        memeUrl: ""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https:api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const memeArr = allMemes
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomNumber].url
        console.log(url)
        setMemetext(prevState => ({
            ...prevState,
            memeUrl: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemetext(prevState => ({
            ...prevState,
            [name] : value

        }))
    }

    return (
        <main> 
            <div className='input--container'>
            <input 
                type="text"
                placeholder="Insert text here"
                className="form--input"
                name="topText"
                value={memeText.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Insert text here"
                className="form--input"
                name='bottomText'
                value={memeText.bottomText}
                onChange={handleChange}
            />
            </div>
            <button
                className="form--button"
                onClick={getMemeImage}>
                    Generate Meme Image
            </button>
            <div className='meme--Image'>
            <img 
                src={memeText.memeUrl}
                className='image'
                width="100%"
         
                />
            <div className='topText'>
                <h1>{memeText.topText}</h1>
            </div>
            <div className='bottomText'>
                <h1>{memeText.bottomText}</h1>
            </div>
            </div>
        </main>

       
        
    )
}

export default Meme