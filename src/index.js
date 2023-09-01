import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// UI

// JSX
// const version = 2;
//const webPage = <h1>Hello React!! V.{version + 1}</h1>; // JSX
// const webPage = <h1>Hello React!! V.{for (let i = 0; i < 10; i++) {}}</h1>; // JSX :Error

// ####################################################
// ################### วิธี Render #####################
// ###################################################

// ###### 1 เก็บสิ่งที่จะ render ไว้ในตัวแปร (ยังไม่เป็น Component)
// const app = (
//   <div>
//     <h1>Hello React : Friend List</h1>
//     <ul>
//       <li>John Doe!</li>
//       <li>Jack Cowboy!</li>
//       <li>Jane SixSense!</li>
//       <li>Jame Camera!</li>
//     </ul>
//   </div>
// );

// ####### 2 ทำเป็น Component
// Component (Function ที่ให้ output/return เป็น JSX)
// สิ่งที่ return === สิ่งที่ render
// function App() {
//   // return "Hello React" // return string
//   return <div>Hello React</div>; // return string
// }

// // FC : Friend สำหรับแสดง tag li เป็นชื่อเพื่อน
// function Friend() {
//   return <li>John</li>;
// }

// // FC : Header สำหรับแสดง tag h1 เป็นชื่อ web เช่น CC-888
// function Header() {
//   return <h1>CC-888</h1>;
// }

// ####################################################
// ################  COMPOSE COMPONENT ################
// ###################################################
// Compose Component : เอา Component มาประกอบกัน
//  Compose Component : การเรียก  Component อื่นๆใน FC

// function App() {
//   return (
//     <div>
//       <Header />
//       <Friend />
//       <Friend />
//       <Friend />
//       <Friend />
//     </div>
//   );
// }

// // วิธีทำให้ render : <Friend/> === <li>John</li>
// function Friend() {
//   return <li>John</li>;
// }

// function Header() {
//   return <h1>CC-888</h1>;
// }

// ###################################################
// #####################  Props ######################
// ###################################################
// Props
// Props : attribute ของ Function Component (มุม Render)
// Props : input ของ Function Component (มุมคนเขียน Component)

// function App() {
//   const denotator = function () {
//     console.log('Trigger Nuke');
//   };
//   return (
//     <div>
//       {/* มุมคนเรียก Render : Render == Return */}
//       <Friend name='John' age={32} fn={denotator} />
//       <Friend name='Jane' age={30} fn={denotator} />
//       <Friend name='Joe' age={300} fn={denotator} />
//       <Friend name='Jack' fn={denotator} />
//     </div>
//   );
// }

// // มุมคนเขียน Component
// function Friend(props) {
//   // console.log(props);
//   props.fn(); // props.fn() == denotator()
//   return (
//     <li>
//       {props.name} : {props.age}
//     </li>
//   );
// }

// ###################################################
// #####################  STATE ######################
// ###################################################

// State Change == Code ทั้งหมดใน FC จะถูกรันใหม่อีกรอบ == return JSX ใหม่ == Rerender
// function App() {
//   // const [count, setCount] = React.useState(0);
//   console.log('App');
//   return (
//     <div>
//       {/* <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span> */}
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   );
// }
// // แต่ละ Component บริหารจัดการ State แยกจากกัน
// function Counter() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <span>{count}</span>
//     </div>
//   );
// }

// ###################################################
// ################  STATE : PITFALL #################
// ###################################################

function Counter() {
  const [count, setCount] = React.useState(0);
  console.log('render');
  const handleIncreaseByThree = () => {
    // setCount(count + 1); // 0->1
    // setCount(count + 1); // 0->1
    // setCount(count + 1); // 0->1

    // Syntax for UpdateState
    // 1 : setState(newState)
    // 2 : setState(prevState => prevState + 1)
    // setCount((c) => c + 1); // 0 => 0+1 === 1
    console.log('count', count);
    // setCount((c) => c + 1); // 1 => 1+1 === 2
    // setCount((c) => c + 1); // 2 => 2+1 === 3
  };
  return (
    <div>
      <button onClick={handleIncreaseByThree}>+</button>
      <span>{count}</span>
    </div>
  );
}

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
