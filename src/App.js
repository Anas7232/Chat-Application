import './App.css';
import { ChatEngine } from 'react-chat-engine';

import  ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
       height="100vh"
       projectID="a2a7bbdb-237d-476a-8753-86300cf244c0"
       userName={ localStorage.getItem('username') }
       userSecret={ localStorage.getItem('password') }
       renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
    />
  );
}

export default App;
