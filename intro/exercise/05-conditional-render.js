function Message({ message }) {
  // if (!message) {
  //   // return <h1>No Message</h1>;
  //   return React.createElement('h1', null, 'No Message');
  // }
  // // return <h1>{message}</h1>;
  // return React.createElement('h1', null, message);

  // return message ?
  //   React.createElement('h1', null, message) :
  //   React.createElement('h1', null, 'No Message');
  return message ? <h1>{message}</h1> : <h1>No Message</h1>;
}
ReactDOM.render(
  <Message message="Hello World" />,
  // <Message message={null} />,
  document.getElementById('root')
);