const rootEl = document.getElementById('root');
// const helloWorld = <div>Hello World</div>;
// const element = (
//   <div className="container">
//     {helloWorld}
//     {helloWorld}
//   </div>
// );

// const message = props => <div>{props.msg}</div>;
// const element = (
//   <div className="container">
//     {React.createElement(message, { msg: 'Hello World!' })}
//     {React.createElement(message, { msg: 'Goodbye World!' })}
//   </div>
// );

const Message = (props) => <div>{props.msg}</div>;
const element = (
  <div>
    <Message msg='Hello World!' />
    <Message msg='Goodbye World!' />
  </div>
);

ReactDOM.render(element, rootEl);