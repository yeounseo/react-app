import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css'; 


class App extends Component {
  constructor(props) {
    // 초기화를 담당하는 constructor
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id:2,
      subject:{title: 'WEB', sub:'World Wide Web!'},
      welcome:{title: 'Welcome', desc:'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    console.log('App render');
    
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // push 는 원본에 추가 , concat은 기존배열에 합쳐서 새 배열을 만든다. concat을 이용하는게 좋다.
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc }
        // );
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc }
        );
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc);
      }.bind(this)} />
    }
    return (
      <div className="App">
      {/* state는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다. */}
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} 
        onChangePage={function(){
          this.setState({
            mode:'welcome'
          });
        }.bind(this)}
        />
        <TOC 
          onChangePage={function(id){
            this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents} />
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
