import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'
import RecipesList from '../components/RecipesList'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
          <h3>Want To Get In Touch?</h3>
          <p>Affogato fingerstache hammock, selvage yuccie lo-fi art party. Schlitz ugh gluten-free flannel. Tbh disrupt selvage, irony locavore JOMO air plant big mood you probably haven't heard of them bitters hella.</p>
          <p>Kickstarter kinfolk yuccie tattooed squid, franzen copper mug. Offal tote bag chambray vape four dollar toast. PBR&B intelligentsia hexagon poke af, taiyaki biodiesel pork belly master cleanse seitan humblebrag pinterest.</p>
          <p>Coloring book activated charcoal messenger bag sartorial chicharrones pork belly. Authentic heirloom salvia sartorial meditation kitsch. Banjo umami asymmetrical four dollar toast drinking vinegar vexillologist pop-up kinfolk portland. Prism pour-over gentrify, beard fam put a bird on it pickled wolf air plant.</p>
          </article>
          <article>
            <form className='form contact-form'>
            <div className='form-row'>
             <label htmlFor='name'>your name</label>
             <input type='text' name='name' id='name' />
            </div>
            <div className='form-row'>
             <label htmlFor='email'>your email</label>
             <input type='text' name='email' id='email' />
            </div>
            <div className='form-row'>
              <label htmlFor='message'>message</label>
              <textarea name='message' id='message'></textarea>
            </div>
            <button type='submit' className='btn block'>submit</button>
            </form>
          </article>
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
export default Contact