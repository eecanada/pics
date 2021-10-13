import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Italy' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label> Search Photos: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
