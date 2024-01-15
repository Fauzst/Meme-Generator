import './App.css'

function Header(){
    console.log("working")
    return (
        <header className="header--container">
            <div className="logo--container">
                <img src="./images/meme.png"></img>
                <p>Meme Generator</p>
            </div>
            <p>A Coding Class Project</p>
        </header>
    )
}

export default Header