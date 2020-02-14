import React from 'react';
import { PHeadline, PIcon, PButton } from '@porsche-design-system/components-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  submit(event) {
    event.nativeEvent.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.submitted ? <PHeadline>Hello</PHeadline> : '' }
        <PIcon name="delete"></PIcon>
        <form onSubmit={e => this.submit(e)}>
          <PButton type={"submit"}>Submit</PButton>
        </form>
      </div>
    );
  }
}

export default App;
