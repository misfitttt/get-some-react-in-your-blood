import React, {useState} from 'react'
// import Redux from 'redux'
// import {Provider} from 'react-redux'
import { connect } from 'react-redux'

class Age extends React.Component {
   // state= {age: 21}
   //
   // ageUp = () => {this.setState({
   //   age: this.state.age+12
   //  })}
   //  ageDown = () => {this.setState({
   //    age: this.state.age-4
   //  })}

  render () {

    return (
      <div>
      <div> age: <span>{this.props.age}</span></div>
      <button onClick={this.props.ageUp}>up</button>

      <button onClick={this.props.ageDown}>down</button>
      <KiaButton />
      </div>
    )
  }
}

function KiaButton() {
  const [value, setValue] = useState('')
  return (
    <div>
    <input placeholder="add to list" onChange={e => setValue(e.target.value)} />
    <button onClick={() => console.log(value)} >hehe</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    ageUp: () => dispach({type: 'AGE_UP'}),
    ageDown: () => dispach({type: 'AGE_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Age)
