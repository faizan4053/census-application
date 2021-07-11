// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import CensusIndexComponent from './components/CensusIndexComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddMemberComponent from './components/AddMemberComponent';
import FindMembers from './components/FindMembers';
import ListFamilyComponent from './components/ListFamilyComponent';
import AddRelationsComponent from './components/AddRelationsComponent';
import EditMemberComponent from './components/EditMemberComponent';

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent />
            <div className="container">
                <Switch>
                  <Route path="/" exact component={CensusIndexComponent }></Route>
                  <Route path="/addMember" component={AddMemberComponent}></Route>
                  {/* <Route path="/searchMembers" component={SearchMembers }></Route> */}
                  <Route path="/searchMembers" component={FindMembers}></Route>
                  <Route path="/familyMembers/:familyCode" component={ListFamilyComponent}></Route>
                  <Route path="/addRelations/:familyCode" component={AddRelationsComponent}></Route>
                  <Route path="/editMember/:memberId" component={EditMemberComponent}></Route>
                {/* <CensusIndexComponent /> */}
                </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

{/* <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
                <Switch>
                    <Route path="/"  exact component={ListEmployeeComponent}></Route>
                    <Route path="/employees" component={ListEmployeeComponent}></Route>
                    <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                    <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                    <ListEmployeeComponent/>
                </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div> */}