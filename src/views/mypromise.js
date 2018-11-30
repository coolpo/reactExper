import React, { Component } from 'react'
import { rejects } from 'assert';

export default class Mypromise extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>动手撸一个Promise呀！------------</div>
    )
  }
    /**
   * @memberof Mypromise
   * 每一个promise 天然有then函数
   * promise 有三种状态：等待状态(pending)-->成功状态(resolved)/失败状态(rejected)
   * promise的状态只改变一次
   */
  myPromise() {
    return new Promise((resolve, rejects) => {
      // 这里会立即执行
      console.log('这里会被立即执行！')
      resolve()
    })
  }

  componentWillMount() {
    this.myPromise().then(res => {
      console.log('成功函数！');
    }, error => {
      console.log('失败函数！');
    })
  }
}