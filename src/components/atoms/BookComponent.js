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
import styles from '../../styles/atoms/BookComponent.module.css'

const BookComponent = props => {
  return (
        <div className={styles.bookContainer}>
            <div>
                { props.image && (
                    <>
                        <img src={props.image} alt={`Omslag van ${props.title}`}/>
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
                                return <React.Fragment key={index}>&nbsp;en<a href={props.types[key].link ?? '#'} className={'underlined'}>&nbsp;{key}</a></React.Fragment>
                              } else {
                                return <React.Fragment key={index}><a href={props.types[key].link ?? '#'} className={'underlined'}>&nbsp;{key}</a></React.Fragment>
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
