import React, { Component } from 'react'
import axios from 'axios'
const api_key = '0lkxN4MxSTQadZePdtfT0xZnf8IYGpRS';

function GiphyView(props){
  return props.data.map(el => <img alt={el.title} key={el.id} src={el.images.fixed_height.url}></img>);
}

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      giphy: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e){
    this.setState({
      searchValue: e.target.value || ''
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const searchValue = this.state.searchValue.replace(/\w/,'+');
    const self = this;
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${api_key}&limit=20`)
    .then(function (response) {
      self.setState({
        giphy: response.data.data
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    return (
      <div>
      <form name="giphy" method="get" action="my-route"
        onSubmit={this.handleSubmit}
      >
          <input type="text" name="q"
            onChange={this.handleOnChange}
            value={this.state.searchValue}
          />
          <button type="submit">Search</button>
        </form>
      <div className="giphy__block">
        <GiphyView data={this.state.giphy}/>
      </div>
      </div>
    )
  }
}
