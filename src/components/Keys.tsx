const KEYS = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
]

export function Keys () {
    return (
        <div className='keyboard'>
            {KEYS.map(key => {
                return (
                    <button className="keyButton" style={{ border: '2px solid black', fontWeight: 'bold', fontSize: '2em', textTransform: 'uppercase', cursor: 'pointer' }} key={key}>{key}</button>
                )
            })}
        </div>
    )
}