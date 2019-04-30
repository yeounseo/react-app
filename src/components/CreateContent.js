import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      // this.props.title = 'hi';
      // Component 안에서 전달된 props를 바꿀수 없다.(금지)

      console.log('Content render');
      
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="description"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
  }
  
export default CreateContent;