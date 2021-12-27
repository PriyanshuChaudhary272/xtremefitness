import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BlogState from './Context/Blogs/BlogState';
import BlogCrouselState from './Context/blogsCarousel/carouselState';
// import { Provider } from 'react-redux'
// import store from './Store/index'
ReactDOM.render(
  // <React.StrictMode>
  <BlogState>
    <BlogCrouselState>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BlogCrouselState>
  </BlogState>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);