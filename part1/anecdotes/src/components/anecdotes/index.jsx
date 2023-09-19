import React,{useState} from "react";

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
      const anecLength = anecdotes.length
      const [selected, setSelected] = useState(0)
      const [votes, setVotes] = useState( new Array(anecLength).fill(0))
      console.log(votes)

      const handleNext = () => {
        if(selected<anecLength-1){
          const nextAnec = selected + 1
          setSelected(nextAnec)
          console.log(nextAnec)
        }
        else{
            setSelected(0)
        }
      }
      const handleVote = () => {
        const copy = [...votes]
        copy[selected]++
        setVotes(copy)

      }
      const maxVotes = Math.max(...votes)
      console.log(maxVotes)
      const maxVotesIndex = votes.indexOf(maxVotes)
      console.log(maxVotesIndex)

      
    
      return (
        <>
        <h1>Anecdotes of the day</h1>
        <Anecdote anecdotes={anecdotes} selected={selected} votes={votes}/>
        <Button text='Vote' handleClick={handleVote}/>
        <Button text='Next Anecdotes' handleClick={handleNext}/>
        <h3>Anecdote with most votes</h3>
        <Anecdote anecdotes={anecdotes} selected={maxVotesIndex} votes={maxVotes}/>

        </>
      )
}
const Button = ({text,handleClick}) => {
    return (
    <>
    <button onClick={handleClick}>{text}</button>
    
    </>
    )
}
const Anecdote = ({anecdotes,selected,votes}) => {
    return (
        <>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>

        </>
    )
}
export default Anecdotes