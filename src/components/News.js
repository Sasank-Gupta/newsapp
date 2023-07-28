import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
        articles= [
            {
                "source": {
                    "id": "news-com-au",
                    "name": "News.com.au"
                },
                "author": null,
                "title": "Aussie cricket legend’s tragic reveal",
                "description": "Former Australian cricket captain Allan Border has revealed he has been battling Parkinson&rsquo;s disease for the past seven years.",
                "url": "https://www.news.com.au/sport/cricket/australian-cricket-legend-allan-border-has-parkinsons-disease/news-story/0aa6bbc66eaa2d976adfe5b0d7c6c989",
                "urlToImage": "https://content.api.news/v3/images/bin/bfdd99638cc12c6172fe6118f1243946",
                "publishedAt": "2023-06-30T12:30:00Z",
                "content": "Former Australian cricket captain Allan Border has revealed he has been battling Parkinson’s disease for the past seven years.\r\nThe cricket legend revealed the shocking news in The Australian in an a… [+1786 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                "publishedAt": "2020-04-27T11:41:47Z",
                "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                "publishedAt": "2020-03-30T15:26:05Z",
                "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            }
        ]
    // constructor(){
    //     super();
    //     this.state={articles: this.articles,
    //     loading:false,
    //     page:1}
    // }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0c65c29927794d1b8628626a82472d32&page=${this.state.page}&pageSize=10`
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles, totalArticles:parsedData.totalResults})
    }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0c65c29927794d1b8628626a82472d32&page=${this.state.page - 1}&pageSize=10`
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page: this.state.page-1, 
            articles: parsedData.articles
        })
        
    }
    handleNextClick= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0c65c29927794d1b8628626a82472d32&page=${this.state.page + 1}&pageSize=10`
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page: this.state.page+1, 
            articles: parsedData.articles
        })
    }
  render() {
    return (
      
        <div className="container my-3">
            <h2>NewsMonkey - Top headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                return<div className="col-md-4" key={element.url}><NewsItem  title={!element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled={this.state.page+1>(Math.ceil(this.state.totalArticles/10))} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
  }
}

export default News
