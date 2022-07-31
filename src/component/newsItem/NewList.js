import React from 'react'

const NewList = ({image,title,description,newsurl}) => {
  return (
  <>
    <div className="card my-4" style={{width: "19rem", height:"25rem"}}>
  <img className="card-img-top" style={{width:"300px", height:"200px"}} src={image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text" >{!description ? "The goal of your is business description  to investors and what ":description.slice(0,60)}</p>
    <a href={newsurl} target="_blank" className="btn btn-small btn-dark">Read More</a>
  </div>
</div>

  </>
  )
}

export default NewList