/**
 * React
 */
import React from 'react'

/**
 * Styles
 */
import styles from '../styles/BookComponent.module.css'


const defaultImage = '/omslag-inspecteur-vos.png';

const BookComponent = props => {
    let pricingString = '';
    if (props.price.paperback) pricingString = pricingString.concat(`€ ${props.price.paperback} (paperback)`);
    if (props.price.ebook) pricingString = pricingString.concat(` € ${props.price.ebook} (e-book)`);
    pricingString = pricingString.trim();

    return (
        <div className={styles.bookContainer}>
            <div className={styles.bookImage}>
                <img src={props.image ?? defaultImage} />
            </div>
            <div className={styles.bookInfo}>
                <h2>{props.title}</h2>
                <h3>{pricingString}</h3>
                {props.description.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
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
    price: {
        paperback: undefined,
        ebook: undefined,
    },
}

export default BookComponent;