// import React, { useState } from 'react';
import React, { useState } from 'react';
import Header from './Header';

import Routes from './routes';

import './global.css';

function App() {
  return (
    <Routes />
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




