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
import styles from '../styles/BookComponent.module.css'

const BookComponent = props => {
  return (
        <div className={styles.bookContainer}>
            <div>
                { props.image && (
                    <>
                        <img src={props.image} />
                        <br />
                    </>
                )}
            </div>

            <div className={styles.bookInfo}>
                <h2>{props.title}</h2>
                {props.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
              {props.types && (
                  <>
                      <p>Nu beschikbaar als
                      {
                          Object.getOwnPropertyNames(props.types)
                            .map((key, index) => {
                              if (index !== 0) {
                                return <React.Fragment key={index}> en <a href={props.types[key].link ?? '#'}> {key}</a></React.Fragment>
                              } else {
                                return <React.Fragment key={index}><a href={props.types[key].link ?? '#'}> {key}</a></React.Fragment>
                              }
                            })
                      }
                      .
                      </p>
                  </>
              )}
            </div>
        </div>
  )
}

/**
 * Default props
 */
BookComponent.defaultProps = {
  title: '',
  description: [],
  image: null,
  types: undefined
}

BookComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  types: PropTypes.objectOf(
    PropTypes.shape({
      link: PropTypes.string,
      price: PropTypes.number
    }))
}

export default BookComponent
