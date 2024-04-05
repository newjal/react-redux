import React from 'react';
import './App.css';
import HomeContainer from './Container/HomeContainer';
import HeaderContainer from './Container/HeaderContainer'



function App() {
  return (
    <div className="App"> 
    <HeaderContainer />
    <HomeContainer />
      
    </div>
  );
}

export default App;









































// function App() {
//   return (
//     <div className="App"> 
//       <h1>App Component</h1>
//       <User data={{ name: "anil siddhu", age: 23}} /> 
//       {/* props use gareyra data pass gareko */}
//     </div>
//   );
// }

// export default App;
