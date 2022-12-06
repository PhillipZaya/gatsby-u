import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {graphql, Link} from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({ data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>heroine Lucy Barton in a luminous novel about love, loss, and the family secrets that can erupt and bewilder us at any point in life</p>
            <p>fe as a recent widow and parent to two adult daughters. A surprise encounter leads her to reconnect with William, her first husband </p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage
          src='../assets/images/about.jpeg'
          alt='Person Pouring salt in bowl'
          className='about-img'
          placeholder='blurred'/>
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulRecipe (
    sort: {fields: title, order: ASC}
    filter: {featured: {eq: true}}
  ){
    nodes {
      id
      title
      cookTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`
export default About