import React, { useState, useEffect } from 'react'
import NewList from './newsItem/NewList'
import Spinner from './newsItem/Spinner'


const NewsMenu = (props) => {
    const[page, setPage]=useState(1)
    const [articles, setArticles] = useState([])
    const[totalResults, setTotalResults]= useState(0)
    const [loading, setLoading] = useState(true)
   
    const getUrl = async () => {
      
     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=231329578ee54ed398def85b1f3afca7&page=${page}&pageSize=20`;

       setLoading(true)
        let response = await fetch(url);
    
        let data = await response.json();
         console.log(data)
        setArticles(data.articles);
      
        setTotalResults(data.totalResults);
         setLoading(false)
       
    }
    useEffect(() => {
        
         getUrl();
        
     
    },[]);
 
     const HandleNext=async()=>{
        
       
        setPage(page + 1)
        getUrl();
     }
    
  
    const HandlePervious= async()=>{
       
        setPage(page - 1)
        getUrl();
    
      
    }
    return (
        <>
    
            <div className="container mt-4">
            <h2 className="text-center ">News- Top HeadLines</h2>
            {loading && <Spinner/>}
                <div className="row">
                    {articles.map((data) => {
                        const { title, urlToImage, url, description } = data
                        return (
                            <div className="col-md-4" key={url}>
                                <NewList title={title.slice(0, 40)} description={description} image={!urlToImage ? "https://image.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-250nw-1712082700.jpg":urlToImage}
                                    newsurl={url}
                                />
                            </div>

                        )
                    })}
                  
                </div>
                <div className="container d-flex justify-content-between">
                <button  disabled={page<= 1} type="button" class="btn btn-dark" onClick={HandlePervious}>&laquo; Pervious </button>
                    <button  disabled={page + 1 > Math.ceil(totalResults/20)} type="button" class="btn btn-dark" onClick={HandleNext}>Next &raquo;</button>
                </div>
                
            </div>



        </>
    )
}

export default NewsMenu