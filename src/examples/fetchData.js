import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
 query {
  site{
    info: siteMetadata {
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
            info: {title},
        },
    } = useStaticQuery(getData)


    //or (same query but differnt style of writing it)
    // const data = useStaticQuery(getData);
    return (
    <div>
        {/* <h2>Name: {data.site.info.person.name}</h2> */}
        <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData