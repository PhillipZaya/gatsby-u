import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
 {
  site{
    siteMetadata {
      author
    description
      simpleData
      title
      complexData{
        age
        name
      }
      person {
        age
        name
      }
  }
  }
}
`

const FetchData = () => {
    const {
        site: {
            siteMetadata: {title},
        },
    } = useStaticQuery(getData)


    //or (same query but differnt style of writing it)
    // const data = useStaticQuery(getData);
    return (
    <div>
        {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
        <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData


// A way to display 2 items of data.
// <div>
// {data.site.siteMetadata.complexData.map((item,index) => {
// return (
// <p key={index}>
// {item.name}:{item.age}
// </p> )})}
// </div>

// adding alias example:
// info:siteMetadata