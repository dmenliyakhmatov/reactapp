import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import style from "./app.module.scss";

class Clock extends React.Component<any, any> {
  timerID: any;

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("1");
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  //   console.log("2", this.state);
  // }

  // // shouldComponentUpdate(nextProps, nextState) {
  // //   console.log("shouldUpdate");

  // //   if (nextState.count > 3) {
  // //     return false;
  // //   }
  // //   return true;
  // // }

  // componentDidUpdate() {
  //   console.log("4", this.state);
  // }

  // componentWillUnmount() {
  //   console.log("3");

  //   clearInterval(this.timerID);
  // }

  // tick() {
  //   this.setState((prev) => ({
  //     date: new Date(),
  //     count: prev.count + 1,
  //   }));
  // }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
let timerID;
const FuncClock = (props) => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  console.log("render");

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    timerID = setInterval(tick, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    console.log("4", date);
  }, [date]);

  useEffect(() => {
    console.log("Счетчик обновился", count);
  }, [count]);

  return (
    <div className={style.clock}>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        type="button"
      >
        click, me
      </button>
      <h1>{`Кликнули ${count} раз`}</h1>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Clock />
      <FuncClock />
    </div>
  );
}

export default App;
