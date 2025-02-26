import React, { useState, PureComponent } from 'react';
import RocketCore from './RocketCore';

const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

class ClassRocket extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

export {FunctionalRocket, ClassRocket}