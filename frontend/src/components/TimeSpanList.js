import React from "react";

export default class TimeSpanList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  handleActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  renderTimes(times) {
    return (
      <ul className="list-group">
        {times.map((time, i) => (
          <li
            className={
              "list-group-item cursor-pointer " +
              (i === this.state.activeIndex ? "active" : "")
            }
            key={i}
            onClick={() => {
              this.handleActive(i);
            }}
          >
            {time.text}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let { times } = this.props;
    return times.length > 0 ? (
      this.renderTimes(times)
    ) : (
      <div className="alert alert-primary" role="alert">
        No time to display
      </div>
    );
  }
}
