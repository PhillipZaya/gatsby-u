import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>The Pulitzer Prize-winning, Booker-longlisted, bestselling author returns to her beloved heroine Lucy Barton in a luminous novel about love, loss, and the family secrets that can erupt and bewilder us at any point in life</p>
            <p>Lucy Barton is a successful writer living in New York, navigating the second half of her life as a recent widow and parent to two adult daughters. A surprise encounter leads her to reconnect with William, her first husband - and longtime, on-again-off-again friend and confidante. Recalling their college years, the birth of their daughters.</p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage
          src='../assets/images/about.jpeg'
          alt='Person Pouring salt in bowl'
          className='about-img'
          placeholder='blurred'/>
        </section>
      </main>
    </Layout>
  )
}

export default About