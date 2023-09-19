import React,{useState} from "react";


const Unicafe = () => {
    const [reviews,setReviews] = useState({
        good:0,
        neutral:0,
        bad:0
    })
    const handleGoodClick = () =>{
        const updatedGood = reviews.good + 1
        const updatedReviews = {...reviews, good: updatedGood}
        setReviews(updatedReviews)
        console.log(updatedReviews.good)
    }
    const handleNeutralClick = () =>{
        const updatedNeutral = reviews.neutral + 1
        const updatedReviews = {...reviews, neutral: updatedNeutral}
        setReviews(updatedReviews)
        console.log(updatedReviews.neutral)
    }   
     const handleBadClick = () =>{
        const updatedBad = reviews.bad + 1
        const updatedReviews = {...reviews, bad: updatedBad}
        setReviews(updatedReviews)
        console.log(updatedReviews.bad)
    }
    const resetZero = () => {
        const updatedZero = {...reviews, bad: 0, good: 0, neutral: 0}
        setReviews(updatedZero)
        
    }




    return (
        <>
        <Header title='Give Feedback'/>
        <Button text='good' handleClick={handleGoodClick}/>
        <Button text='neutral' handleClick={handleNeutralClick}/>
        <Button text='bad' handleClick={handleBadClick}/>
        <Button text='reset' handleClick={resetZero}/>
        <Header title='Statistics'/>
        <Statistics reviews = {reviews}/>
        
        </>
    )
}
const Header = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}
const Button = ({handleClick, text}) => {
    return (
        <>
        <button onClick={handleClick}>{text}</button>
        </>
    )
}
const StatisticIn = ({text,value}) => {
    return(
        <>
        <table style={{
            width: '50%'
        }}>
            <thead>
                <tr>
                    <th style={{textAlign:'left'}}>{text}</th>
                    <th style={{textAlign:'right'}}>{value}</th>
                </tr>
            </thead>
        </table>
        </>
    )
    
}
const Statistics = ({reviews}) => {
    const {good, neutral, bad} = reviews
    const total = good + bad + neutral
    const avg = total/3 
    const positive = good/total * 100
    if(good === 0 && neutral === 0 && bad === 0){
        return <p>No feedback given</p>
    }
    return (
        <>
        <StatisticIn text='Review Type' value='Count'/>
        <StatisticIn text='Good' value={good}/>
        <StatisticIn text='Neutral' value={neutral}/>
        <StatisticIn text='Bad' value={bad}/>
        <StatisticIn text='Total' value={total}/>
        <StatisticIn text='Average' value={avg.toFixed(2)}/>
        <StatisticIn text='Positive' value={positive.toFixed(2)}/>

       </>
    )
}
export default Unicafe
