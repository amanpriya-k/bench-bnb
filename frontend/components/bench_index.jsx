import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    let { benches } = this.props;
    // debugger
    if (!benches) {
      return null;
    }
    return (
      <ul>
        {this.props.benches.map(
          (bench) => (
            <li key={bench.id}>
              <h3>{bench.description}</h3>
              <p>latitude: {bench.lat}</p>
              <p>longitude: {bench.lng}</p>
            </li>
          )
        )}
      </ul>
    );
  }
};

export default BenchIndex;
