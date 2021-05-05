import React, { Component, Fragment } from "react";

import "./main.scss";

const { REACT_APP_API_ROOT } = process.env;

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
interface State {}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <main className="main">Main content</main>;
  }
}

export { Main };
