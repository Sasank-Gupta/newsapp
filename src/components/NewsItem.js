import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://www.indiablooms.com/health_pic/2023/b4c9fafc1998748a14935427c1b9a51d.jpg"}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
