/**
 * React
 */
import React from 'react'

/**
 * PropTypes
 */
import PropTypes from 'prop-types'

/**
 * Lottie
 */
import { Player } from '@lottiefiles/react-lottie-player'

/**
 * Styling
 */
import styles from '../../styles/atoms/ScrollDownComponent.module.css'

const ScrollDownComponent = (props) => (
    <div className={styles.scrollDownContainer}>
        <div className={styles.scrollDownContent}>
            { props.isMainTitle
              ? (
                    <h1>{props.title}</h1>
                )
              : (
                    <h2>{props.title}</h2>
                )
            }
            <p>{props.description}</p>
            <div className={styles.scrollDownAnimationContainer}>
                <a href={`#${props.anchor}`}>
                    <Player
                        autoplay={true}
                        loop={true}
                        src={'/other/scrollDownAnimation.json'}
                    />
                </a>
            </div>
        </div>
    </div>
)

ScrollDownComponent.defaultProps = {
  title: '',
  description: '',
  anchor: '',
  isMainTitle: true
}

ScrollDownComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  anchor: PropTypes.string,
  isMainTitle: PropTypes.bool
}

export default ScrollDownComponent
