import React from 'react';

class SearchBar extends React.Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  onInputClick(){
    console.log('click clack');
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div>
            <label> Image Search</label>
            <input type="text" onChange={this.onInputChange}  onClick={this.onInputClick}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
