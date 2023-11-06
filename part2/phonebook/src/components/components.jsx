export const Filter = ({text,search,handleChange}) => {
    return(
    <p>{text}  
    <input value={search} onChange={handleChange}/>
  </p>
    )
}
export const AddContact = ({newVal,handleChange,text}) => {
    return(
        <>
        {text}: <input value={newVal} onChange={handleChange} required/>
        </>

    )
}
export const SubmitBut = ({name,type}) => {
    return(
        <button type={type}>{name}</button>
        )
}

export const Name = ({name, contact}) => {
    return (
        <li><b>{name}</b> - {contact}</li>
    )
}