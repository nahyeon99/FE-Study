// react 컴포넌트 정의하기
const el = React.createElement;

class HelloButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Hello World!";
    }

    return el(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Hello"
    );
  }
}
