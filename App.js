class App extends React.Component {
  constructor() {
    super();
    console.log("Hello from Constructor");
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    console.log("Hello from Component did mount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => this.setState({ todos: json }));
  }

  componentDidUpdate() {
    console.log("Hello from component did update");
  }

  render() {
    console.log("hello from Render");
    return (
      <div>
        <h1>Lifecycle Methods</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
