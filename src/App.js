
import Chatsection from "./facebook/Chatsection";
import Feeds from "./facebook/Feeds";
import Home from "./facebook/Home";
import Navbar from "./facebook/Navbar";
import Newsfeed from "./facebook/Newsfeed";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Newsfeed/>
      <Feeds/>
      <Chatsection/>
    </div>
  );
}

export default App;
