import cat from './assets/kat.png'
import room from './assets/room.png'
import flowers from './assets/flowers.jpeg'
import  abobus from './assets/aboba1.jpg'
import aboba from './assets/aboba2.jpg'
import './App.css'

function App() {
    const getRandom = () => {
        const words = ["Guitars playing it`s cool ❤", 'Good luck ❤', 'osu ❤', 'fiends ❤', 'family ❤', 'goose ❤'];
        const randomWord = words[Math.floor(Math.random() * words.length)];
        return randomWord;
    }
    const Randomimages = () => {
        const images = [<img src={cat} alt=""/>, <img src={room} alt=""/>, <img src={flowers} alt=""/>,
            <img className={"abobusimg"} src={abobus} alt=""/>, <img src={aboba} alt=""/>];
        const randomimages = images[Math.floor(Math.random() * images.length)];
        return randomimages;
    }

    return (
        <>
            <span>{Randomimages()}</span>
            <span className={"main"}>
            <p className="nameteg">Goose</p>
            <h3 className={'text-muted'}>{getRandom()}</h3>
            <a href="https://www.reddit.com/user/JanG0oose">Reddit</a>
            <a href="https://github.com/GGo0se">GitHub</a>
            <a href="https://t.me/go0se_o">Telegram</a>
            </span>
        </>
    )
}

export default App
