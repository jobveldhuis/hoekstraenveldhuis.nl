/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Styles
 */
import styles from '../styles/ProjectOverviewComponent.module.css'

function showProject (isLeft, project) {
  return isLeft
    ? (
        <>
            <div>
                <span>{project.title}</span>
                <h3>{project.description}</h3>
            </div>
            <div>
                <img src={project.image}/>
            </div>
        </>
      )
    : (
        <>
            <div>
                <img src={project.image}/>
            </div>
            <div>
                <span>{project.title}</span>
                <h3>{project.description}</h3>
            </div>
        </>

      )
}

const ProjectOverviewComponent = (props) => (
    <div className={styles.projectOverviewContainer}>
        <h2>{props.title}</h2>

        {props.projects.map((project, index) => {
          const isLeft = index % 2 === 0
          return (
                <div key={index} className={isLeft ? styles.projectLeft : styles.projectRight}>
                    {showProject(isLeft, project)}
                </div>
          )
        })}
    </div>
)

ProjectOverviewComponent.defaultProps = {
  title: '',
  projects: []
}

ProjectOverviewComponent.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }))
}

export default ProjectOverviewComponent
