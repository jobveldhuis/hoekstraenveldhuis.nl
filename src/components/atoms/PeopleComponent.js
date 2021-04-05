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
import styles from '../../styles/atoms/PeopleComponent.module.css'

const PeopleComponent = props => {
  return (
        <div className={styles.peopleContainer}>
            { props.image && (
                <div className={styles.image}>
                    <img src={props.image} alt={`Afbeelding van ${props.name}`}/>
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
