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
import styles from '../styles/PeopleComponent.module.css'

const PeopleComponent = props => {
  return (
        <div className={styles.peopleContainer}>
            { props.image && (
                <div className={styles.image}>
                    <img src={props.image} />
                </div>
            )}
            <div className={styles.peopleInfo}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
  )
}

/**
 * Default props
 */
PeopleComponent.defaultProps = {
  name: '',
  description: '',
  image: null
}

PeopleComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default PeopleComponent
