import React, {
  Component
} from 'react';

export default class Propage extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date()
    }
  }
  // 渲染函数
  render() {
    console.log('进入了render');

    return ( <
      div > Hello world {
        this.state.nowTime.toLocaleTimeString()
      } < /div>
    )
  }
  // 生命周期函数
  componentWillMount() {
    console.log('将要插入组件时：componentWillMount');

  }
  componentDidMount() {
    console.log('组件完成插入：componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillReceiveProps() {
    console.log('父组件重新render，props更新：componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('组件应该更新：shouldComponentUpdate');
    return true
  }
  componentWillUpdate() {
    console.log('组件马上开始更新：componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('组件更新完成：componentDidUpdate');
    console.log('-------------------------------------');
    debugger;
    
  }
  componentWillUnmount() {
    console.log('组件卸载时：componentWillUnmount');
    clearInterval(this.timerID)
  }
  // function
  tick() {
    this.setState({
      nowTime: new Date()
    });
  }
}