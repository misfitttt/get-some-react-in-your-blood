import React, {useState} from 'react'



function SignIn(props) {
  const [value, setValue] = useState("")
  return (
    <div>
    <form onSubmit={e => {e.preventDefault()
      props.history.push('/')}}>
      type here: <input onChange={e => setValue(e.target.value)}/>
      <button onClick={console.log(value)}>click
      </button>
    </form>
    </div>
  )
}
export default SignIn
