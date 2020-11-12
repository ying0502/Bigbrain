/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' };
  }

  render() {
    const { a } = this.state;
    // 可以居中卡片 或者看看让整体看起来舒服一点hhhh
    // 还有几个字段没有渲染 需要做完edit之后渲染
    // 卡片里的样式先这样 回来再调吧咱 😂 扛不住了睡了
    return (
      <div className="row">
        <div className="col s12 l6">
          <div className="card">
            <span className="card-image" />
            <div className="card-content">
              <span className="card-title">{this.props.item.name}</span>
              <img src="images/thumbnail_1.jpg" alt="game_thumbnail" />
              <p>
                Question Number: 10
                {' '}
                {a}
              </p>
              <p>
                Question Number: 10
                {' '}
                {a}
              </p>
              <p>
                Total time to complete: 1 min
              </p>
            </div>
            <div className="card-action">
              {/* 加一个路由跳转 link 需要一个新的路由 */}
              <button className="btn" type="button">edit</button>
              {/* 找一个转换时间的函数放在utils里 然后得到正常的格式 */}
              <span className="right">{this.props.item.createdAt}</span>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default GameItem;
