import './App.css'

function App() {
    const getRandom = () => {
        let words = ["Guitars playing it`s cool ❤", 'Good luck ❤', 'osu ❤', 'fiends ❤', 'family ❤', 'goose ❤'];
        let randomWord = words[Math.floor(Math.random() * words.length)];
        return randomWord;
    }

    return (
        <>
            <p className="nameteg">Goose</p>
            <h3 className={'text-muted'}>{getRandom()}</h3>
            <a href="https://www.reddit.com/user/JanG0oose">Reddit</a>
            <a href="https://github.com/GGo0se">GitHub</a>
            <a href="https://t.me/go0se_o">Telegram</a>
        </>
    )
}

export default App
