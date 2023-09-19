const Hello = ({name , age}) => {
    const bornYear = () => new Date().getFullYear() - age
    
    return (
        <>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
        </>
    )
}

const Example = () => {
    const name = 'Peter'
    const age = 12

    return (
        <>
        <div>
            <h1>Greetings</h1>
            <Hello name = "Maya" age={26+10}/>
            <Hello name = {name} age={age}/>
            </div>
            </>
    )
}
export default Example