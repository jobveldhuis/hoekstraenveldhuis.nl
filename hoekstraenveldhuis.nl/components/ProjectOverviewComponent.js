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

const ProjectOverviewComponent = (props) => (
    <div className={styles.projectOverviewContainer}>
        <h2>{props.title}</h2>

        <div className={styles.projectGrid}>
        {props.projects.map((project, index) => {
          return (
                <React.Fragment key={index}>
                    { index % 2 === 0 && (
                    <>
                        <div>
                            <span className={styles.projectTitle}>{project.title}</span>
                            <h3 className={styles.projectDescription}>{project.description}</h3>
                        </div>
                        <div>
                            <img src={project.image}/>
                        </div>
                    </>
                    )}
                    { !(index % 2 === 0) && (
                        <>
                            <div>
                                <img src={project.image}/>
                            </div>
                            <div>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <h3 className={styles.projectDescription}>{project.description}</h3>
                            </div>
                        </>
                    )}
                </React.Fragment>
          )
        })}
        </div>
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
