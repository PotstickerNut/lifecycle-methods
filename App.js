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
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=yIooyDxILHyVMvOrMOc6FvIWMCN6Tjzc&limit=25&rating=g"
    )
      .then((response) => response.json()) // parse request
      .then((json) => console.log(json));
    //   .then((json) => this.setState({ todos: json })); //get data
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
