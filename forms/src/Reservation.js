import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // will partially update state of any element with a 'name' attribute
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form>
        <label className="reservation__label">
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}  
          />
        </label>
        <br/>
        <label className="reservation__label">
          Number of guests:
          <input 
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}  
          />
        </label>
      </form>
    );
  }
}

export default Reservation;
