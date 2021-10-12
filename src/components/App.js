import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get(`https://api.unsplash.com/search/photos`, {
      params:{query: term},
      headers:{
        Authorization: 'Client-ID duFg4FuOQ59WE8ubtioncwLhYFFPr71WM--7gX-0nZU'
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
