import './App.css'

function Meme() {
    return (
        <main> 
            <div className='input--container'>
            <input 
                type="text"
                placeholder="Insert text here"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Insert text here"
                className="form--input"
            />
            </div>
            <button
                className="form--button">
                    Generate Meme Image
            </button>
        </main>
    )
}

export default Meme