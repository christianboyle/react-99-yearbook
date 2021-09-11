import React, { Component } from 'react';
import { Carousel } from '3d-react-carousal';
import './style.css';

// const elements = [...Array(212).keys()].map((x) => ++x);

// const padded = numbers.forEach(function (number, index) {
//   String(number).padStart(4, '0');
// });

// const items = [];

// for (const [index, value] of elements.entries()) {
//   items.push(<Element key={index} />);

// }

const numbers = [...Array(212).keys()].map((x) => ++x);

function padded() {
  let imgs = numbers.map(function (number, index, i) {
    const num = String(number).padStart(4, '0');
    const src =
      'https://yb.cmcdn.com/yearbooks/8/c/0/d/8c0ddf1ed53f502ed3ce6ec53979a4e3/1100/';
    return <img src={src + num + '.jpg'} alt="" key={i} />;
  });

  return imgs;
}

class App extends Component {
  render() {
    let slides = padded();

    return <Carousel slides={slides} autoplay={false} interval={1000} />;
  }
}

export default App;
