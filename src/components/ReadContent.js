import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
      // this.props.title = 'hi';
      // Component 안에서 전달된 props를 바꿀수 없다.(금지)

      console.log('Content render');
      
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }
  
export default ReadContent;