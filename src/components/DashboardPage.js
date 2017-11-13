import React from 'react';

class DashboardPage extends React.Component {
  state = {
    color: 'red',
  }
  handleButtonClick = () => {
    this.setState(state => ({
      color: state.color === 'red' ? 'blue' : 'red',
    }));
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <p>
          Dashboard Page
        </p>
        <button onClick={this.handleButtonClick}>change color</button>
      </div>
    );
  }
}
// const DashboardPage = () => (
//   <div>
//     Dashboard page content
//   </div>
// );

export default DashboardPage;
