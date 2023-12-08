import React from 'react'
 

class Call extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      number: '(360) 424-5124',
    }
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(e) {
    this.setState({ number: e.target.value})
  }

  render() {
    return (
      
    <div className='call'>
        <img alt='' className='phone' src={require('../assets/phone-icon-946.png')}/>

      <div className='number'>

        <p>Choose a Location</p>

        <div class= "container">
          <div class="select">
            <select onChange={this.handleChange}>
              <option value='(360) 424-5124'>Mt. Vernon</option>
              <option value='(425)-353-2664' >Everett</option>
              <option value='(509) 527-8980'>Walla Walla</option>
            </select>
          </div>
        </div> 

        <a className='actual-number' href={'tel:' + this.state.number}>
          <h3 >{this.state.number}</h3> 
        </a>

      </div>      

    </div>
    )

  }
}

export default Call