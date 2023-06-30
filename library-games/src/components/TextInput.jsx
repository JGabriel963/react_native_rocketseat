export default function TextInput({id, label, value, setValue}) {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                id={id} 
                value={value} 
                onChange={(ev) => setValue(ev.target.value)} 
            />
      </div>
    )
}