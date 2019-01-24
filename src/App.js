import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import "antd/dist/antd.css"


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <nav>
          <Link to='/'> Landing</Link>
          <Link to='/library'> Library</Link>
        </nav>
        <img src="http://pngimages.net/sites/default/files/music-note-png-image-99062.png" height="100" width="100"></img>
        <h1>Bloc Jams</h1>
      </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
