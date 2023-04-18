// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

//#7.2 주식 거래소 api 가져와서 만듬.
function Study() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [betting, setBetting] = useState(0);
  const [dollor, setDollor] = useState(0);

  const onChange = (event) => {
    setBetting(event.target.value);
    setDollor(1);
  };

  const onChangeInput = (event) => {
    setDollor(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.id}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}Usd
            </option>
          ))}
        </select>
      )}
      <input
        type="number"
        onChange={onChangeInput}
        placeholder="put you dollor"
        min={1}
      />
      <h3>you can betting {dollor / betting}</h3>
    </div>
  );
}
/*
//#7.0 to do list part one
function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //길게 쓴 버젼
    // setTodos(function(currentArray){
    //   return
    // })
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

    //.map() : array안에 item들이 각각 내가 원하는 무엇으로 바꿔준 후 새로운 array에 들어가게 된다.
    //예를 들어
    // ['there', 'are', 'you'].map(() => ":)") //결과는 [':)', ':)', ':)']
    // ['there', 'are', 'you'].map((item) => item.toUpperCase()) //결과는 ['THERE', 'ARE', 'YOU']
    //  {toDos.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //  >>>>> {[<li key={0}>{item}</li>, <li key={1}>"hello"</li>]}

  return (
    <div>
      <h1>My to do({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
*/
/*
#6.1 - 6.4 useEffect, cleanup
function Hello() {
  
  //길게 풀어쓴 방법
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("created:)");
    return byFn;
  }
  useEffect(hiFn, []);

  useEffect(function(){
    console.log("hi:)")
    return function(){
      console.log("bye")
    };
  },[])
  
  //보통 쓰는 방법
  useEffect(() => {
    console.log("created:)");
    return () => console.log("destroyed ");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
*/
/*
  //useEffect와 input, state 연결
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("render");
  //내가 state를 변경할 때 모든 코드들은 항상 다시 실행된다. 콘솔에 렌더가 여러번 찍히는것처럶.

  //useEffect : 두개의 argument 를 가지는 function이다. 첫번째 argument는 우리가 딱 한번만 실행하고픈 코드
  // const iRunOnce = () => {
  //   console.log("one");
  // };
  // useEffect(iRunOnce, []);

  //아래의 [keyword]는 keyword가 변화할 때 코드를 실행하라고 알려주는 거다.
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("search for", keyword);
  //   }
  // }, [keyword]);
  useEffect(() => console.log("i run only once"), []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword, counter' changes.");
  }, [keyword, counter]);

  //recap
  // 리액트의 가장 멋진점은, component를 새로고침한다는 것.
  // 그러나 가끔 내 component안에 한번만 실행하고픈 코드가 있을 수도 있다. 그럴때 useEffect()를 사용
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}!!</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"btn"} />
    </div>
  );

}
  */
export default Study;
