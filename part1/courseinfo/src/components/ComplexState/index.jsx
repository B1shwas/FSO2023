import React, {useState} from 'react'

const History = (props) => {
    if (props.allClicks.length === 0){
        return(
            <div>
                the app is used by pressing the buttons
            </div>
        )
        }
        return (
            <div>
                button press history: {props.allClicks.join(' ')}
            </div>
        )

}
const ComplexState = () => {
    const [clicks, setClicks] = useState({
        left:0,
        right:0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setClicks({
            ...clicks,
            left: clicks.left + 1
        })
        setAll(allClicks.concat('L'))
        console.log('rendering...',clicks.left)
    }

    const handleRightClick = () => {
        setClicks({
            ...clicks,
            right: clicks.right + 1
        })
        setAll(allClicks.concat('R'))
        console.log('rendering...',clicks.right)
    }

    return (
        <>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left'/>
        {clicks.right}
        <Button handleClick={handleRightClick} text='right'/>
        <History allClicks={allClicks}/>
        </>
    )
}

const Button = ({text,handleClick}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default ComplexState