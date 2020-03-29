// import React, { useState } from 'react';
import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon/index';
import './global.css';

function App() {
  return (
    <Logon />
  );
}

export default App;

// function App() {
//   const [counter, setCounter] = useState(0);

//   //retorna um array com duas posicoes [valor,funcaoDeAtualizacao do valor]

//   function increment() {
//     setCounter(counter + 1);
//   }
//   return (
//     <div>
//       <Header>
//         Contador: {counter}
//       </Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

// export default App;




