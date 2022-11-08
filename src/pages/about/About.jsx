import React from 'react'
import Header from '../../components/header/Header'
import aboutStyles from './about.module.css'

const About = () => {
  return (
    <>
        <Header/>
        <article className={aboutStyles.article}>
            <h2 className={aboutStyles.header}>Thank you for your attention here!</h2>
            <p>This project was made to train my own understanding of key react toolkit concepts, such as:</p>
            <ul className={aboutStyles.list}>
                <li>configureStore</li>
                <li>createSlice</li>
                <li>createAsyncThunk</li>
                <li>createSelector</li>
            </ul>
            <p>So, it was a good task to complete it in 1.5 days.</p>
        </article>
        <article className={aboutStyles.article}>
          <p>As far as I took a glimpse at React Toolkit Query (RTK Query for short) I saw how much easier create interaction with REST API in RTK Query,
            and now, when I tried all that boilerplate code with extraReducers and their lifecycle, I realized it is completely true.</p>
          <p>I used some tutorials to aquire as many themes as I probably can, so this is my list of wisdom here:</p>
          <ul className={aboutStyles.list}>
            <li>
              <a href="https://www.udemy.com/course/javascript_full/" rel="noopener noreferrer" target="_blank">JS + React & Redux course which is a masterpiece</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=uRqVM2mG7ms" rel="noopener noreferrer" target="_blank">YT video about CRUD operations in React & RTK</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=bbkBuqC1rU4" rel="noopener noreferrer" target="_blank">Practical tutorial from freeCodeCamp.org (Coding Addict) and he is a true Jedai of web dev. Must have!</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=6RTbC8Acj1M" rel="noopener noreferrer" target="_blank">Fast and deep overview of RTK</a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=lkbm-zlcFvs" rel="noopener noreferrer" target="_blank">More advanced tech stack with RTK Query which impressed me to start learn RTK (and RTK Query in the future!)</a>
            </li>
          </ul>
        </article>
        <article className={aboutStyles.article}>
          <p>Thank you for your attention. You also can visit <a style={{textDecoration: 'underline'}} href="https://evgeniykozlov.netlify.app/" rel="noopener noreferrer" target="_blank">my personal site</a> or github repo (in the navbar)</p>
          <p>Enjoy!</p>
        </article>
    </>
  )
}

export default About