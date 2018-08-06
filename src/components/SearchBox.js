import React, { Component } from 'react'
import axios from 'axios'
export default class SearchBox extends Component {
  render() {
    axios.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0lkxN4MxSTQadZePdtfT0xZnf8IYGpRS&limit=5')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

    return (
     <form name="giphy" method="get" action="my-route">
        <input type="text" name="q" 
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}
