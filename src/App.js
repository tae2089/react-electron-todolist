import React from 'react';
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import TodoApp from 'page/TodoApp';
import ModalPopUp from 'page/ModalPopUp';

function App() {

  return (
    <div className="App">
    <TodoApp />
      {/* <Router>
        <Switch>            
              <Route exact path="/" component={TodoApp} /> 
              <Route path="/modal" component={ModalPopUp} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
