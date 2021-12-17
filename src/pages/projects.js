import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
// import Project from "../components/project"

// import data from "../data/projects.json"
// import {StaticImage} from "gatsby-plugin-image"

import project1 from "../images/preview-musicmemories.png"
import project2 from "../images/preview-bus-stop.png"
import project3 from "../images/preview-loremasters-board.png"

const Projects = (props) => {

    return (
      <Layout>
        <Head page="Projects" />
        <h1 className='center'>Projects</h1>

        {/* Project 1 */}
        <section className="projectGroup projectGroupLeft" style={{alignItems: 'center'}}>
            <div className="projectPreview projectPreviewleft" style={{ backgroundImage: `url(${project1})` }}>

            </div>
            <div className="projectInfo projectInfoRight">
              <h6>MusicMemories</h6>
              <div className="projectSkills">
                <a href="https://github.com/SpicyMeatloaf/music-memories"className="projectLink projectAlignRight">Github</a>
                <a href="https://alita-music-memories.herokuapp.com/" className="projectLink projectAlignRight">Website</a>
              </div>

              <p className="projectDescription">A full stack application and music journal with Spotify integration and full CRUD functionality.</p>
              <div className="projectInfoRightBottom">
                <h7>Key Skills:</h7>
                <div className="projectSkills">
                  <p className="projectSkill projectAlignRight">Django</p>
                  <p className="projectSkill projectAlignRight">PostgreSQL</p>
                  <p className="projectSkill projectAlignRight">AWS</p>
                </div>
              </div>
            </div>
        </section>

        {/* Project 2 */}
        <section className="projectGroup projectGroupLeft" style={{alignItems: 'center'}}>
            <div className="projectPreview projectPreviewleft" style={{ backgroundImage: `url(${project2})` }}>

            </div>
            <div className="projectInfo projectInfoRight">
              <h6>At the Bus Stop</h6>
              <div className="projectSkills">
                <a href="https://github.com/SpicyMeatloaf/studio-ghibli-reviews-frontend"className="projectLink projectAlignRight">Frontend</a>
                <a href="https://github.com/SpicyMeatloaf/studio-ghibli-reviews-backend"className="projectLink projectAlignRight">Backend</a>
                <a href="https://studio-ghibli-reviews.netlify.app/" className="projectLink projectAlignRight">Website</a>
              </div>

              <p className="projectDescription">Full stack application built with React with CRUD functionality to post reviews on films produced by Studio Ghibli.</p>
              <div className="projectInfoRightBottom">
                <h7>Key Skills:</h7>
                <div className="projectSkills">
                  <p className="projectSkill projectAlignRight">React</p>
                  <p className="projectSkill projectAlignRight">NodeJS</p>
                  <p className="projectSkill projectAlignRight">MongoDB</p>
                </div>
              </div>
            </div>
        </section>
        
        {/* Project 3 */}
        <section className="projectGroup projectGroupLeft" style={{alignItems: 'center'}}>
            <div className="projectPreview projectPreviewleft" style={{ backgroundImage: `url(${project3})` }}>

            </div>
            <div className="projectInfo projectInfoRight">
              <h6>The Loremaster's Board</h6>
              <div className="projectSkills">
                <a href="https://github.com/SpicyMeatloaf/the-loremasters-board"className="projectLink projectAlignRight">Github</a>
                <a href="https://the-loremasters-board.herokuapp.com/" className="projectLink projectAlignRight">Website</a>
              </div>

              <p className="projectDescription">A fillable table designed for DnD game masters who need a convenient place to put all their special monsters/NPCs.</p>
              <div className="projectInfoRightBottom">
                <h7>Key Skills:</h7>
                <div className="projectSkills">
                  <p className="projectSkill projectAlignRight">NodeJS</p>
                  <p className="projectSkill projectAlignRight">MongoDB</p>
                  <p className="projectSkill projectAlignRight">Morgan</p>
                </div>
              </div>
            </div>
        </section>

      </Layout>
    )
}

export default Projects