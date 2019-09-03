// function SayHello(props) {
//   return (
//     <div>
//       Hello {props.firstName} {props.lastName}!
//     </div>
//   );
// }

// SayHello.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired
// };

// ReactDOM.render(
//   <SayHello firstName={23} />,
//   document.getElementById('root')
// );

class SayHello extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }
  render() {
    const { firstName, lastName } = this.props;
    return (
      <h1>Hello {firstName} {lastName}!</h1>
    );
  }
}

ReactDOM.render(
  <SayHello firstName={true} />,
  document.getElementById('root')
);