import React from 'react';

class App extends React.Component {

  state = {
    data: null
  }

  async componentDidMount() {
    //TODO 
    //1. make a get request to my api. http://localhost5000:/lasagne (fetch)
    const response = await fetch("http://localhost:5000/lasagne")
    console.log(response)
    const data = await response.json()
    //2.Put the result into a state
    this.setState({
      data: data
    })
    //3. This will make render run again and the dom can be updated

  }


  render() {
    const {data} = this.state
    return (
      <div>
        <h1>lasagne app</h1>
        <h3>all lasagnes</h3>
        {data ? data.map((lasagne, index) => {
          return (
            <div key={index}>
              <h4>{lasagne.name}</h4>
            </div>
          )
        }) : null}
      </div>
    );
  }
}

export default App;
