import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Embed from './Embed';


function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <Embed />
    </div>
  );
}

export default withAuthenticator(App)