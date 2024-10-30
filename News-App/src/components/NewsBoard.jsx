import React from 'react'
import { useState, useEffect } from 'react'
import NewsItem from './NewsItem';

function NewsBoard({category}) {

  const API_KEY = '3126b0a507da4ebea3bff380788dcf6e';
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => setarticles(data.articles));
  }, [category])
  

  return (
    <div className='bg-[#e8eaee]'>
        <h2 className='text-center p-4 font-bold text-xl'>Lastest <span className='bg-red-600 p-1 rounded-lg text-white'>News</span></h2>
        <div className='flex flex-row flex-wrap gap-6 justify-center my-3 py-2 '>
          {
            articles?.map((news, index) =>{
              return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} ></NewsItem>
            })
          }
        </div>
    </div>
  )
}

export default NewsBoard