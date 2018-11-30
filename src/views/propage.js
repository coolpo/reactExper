import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Propage extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date()
    }
    // ---------------------------------------------------------------------------------
    //  模拟实现订阅与发布
    this.eventObj = {
      arr: [],
      result: [],
      on(fn) { // 订阅
        this.arr.push(fn)
      },
      emit(data) { //  发布 通知每一个订阅的
        this.result.push(data);
        this.arr.forEach(fn => fn(this.result))
      }
    }
    // ---------------------------------------------------------------------------------


  }
  // 渲染函数
  render() {
    console.log('进入了render');
    return (
      <div>
        <div>就是要实现个表：{this.state.nowTime.toLocaleDateString()}</div>
        <div>
          <Link to='/mypromise'>手动实现一个Pormise</Link>
        </div>
      </div>
    )
  }
  // 生命周期函数
  componentWillMount() {
    console.log('将要插入组件时：componentWillMount');
    // ---------------------------------------------------------------------------------
    // 回调函数
    this.isType([1, 2, 3], 'Array', (type, t) => {
      console.log({ type, t });
      console.log(type === t);
    })
    // ---------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------
    // 订阅与发布
    this.asyncFnA();
    this.asyncFnB();

    this.eventObj.on(function (data) {
      if (data.length == 2) {
        console.log(data)
      }
    })
    // ---------------------------------------------------------------------------------

  }

  // 实现异步函数
  asyncFnA() {
    return new Promise((resolve, reject) => {
      // 随机返回时间
      setTimeout(() => {
        this.eventObj.emit('asyncFnA is done!')
        resolve()
      }, Math.random() * 5000);
    })
  }
  asyncFnB() {
    return new Promise((resolve, reject) => {
      // 随机返回时间
      setTimeout(() => {
        this.eventObj.emit('asyncFnB is done!')
        resolve()
      }, Math.random() * 5000);
    })
  }

  // 回调函数 实现
  isType(content, type, fn) {
    let t = Object.prototype.toString
      .call(content, type)
      .replace(/\[object\s|\]/g, '')

    fn(type, t)
  }
}