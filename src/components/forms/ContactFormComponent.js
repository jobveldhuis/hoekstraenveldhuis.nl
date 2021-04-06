/**
 * React
 */
import * as React from 'react'
import { useForm } from 'react-hook-form'

/**
 * Axios
 */
import axios from 'axios'

/**
 * Styling
 */
import styles from '../../styles/forms/ContactFormComponent.module.css'

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  async function onSubmitForm (values) {
    const config = {
      method: 'POST',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json'
      },
      data: values
    }

    try {
      const response = await axios(config)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmitForm)} className={styles.contactForm}>
            <div className={`form-group ${styles.group}`}>
                <label>Uw naam</label>
                <input
                    {...register('name')}
                    type="text"
                    name="name"
                    className={errors?.name ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors?.name?.message}
                </small>
            </div>
            <div className={`form-group ${styles.group}`}>
                <label>Uw emailadres</label>
                <input
                    {...register('email')}
                    type="email"
                    name="email"
                    className={errors?.email ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors?.email?.message}
                </small>
            </div>
            <div className={`form-group ${styles.group}`}>
                <label>Hoe kunnen we u van dienst zijn?</label>
                <textarea
                    {...register('message')}
                    name="message"
                    placeholder="Vertel ons over uw project, stel uw vraag of plaats uw opmerking."
                    className={errors?.message ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors?.message?.message}
                </small>
            </div>
            <div className={`form-check ${styles.group}`}>
                <input className={errors?.privacyCheck ? `form-check-input ${styles.error}` : 'form-check-input'} id='privacyCheck' name='privacyCheck' type='checkbox' />
                <label htmlFor='privacyCheck' className={`form-check-label ${styles.checkboxLabel}`}>Ik ga akkoord dat bij het verzenden van dit formulier bovenstaande gegevens worden verstuurd aan Hoekstra & Veldhuis. Voor meer informatie, zie ons <a className="underlined" href="/documents/hoekstra-en-veldhuis-privacybeleid.pdf">privacybeleid</a>.</label>
            </div>
            <button type="submit">Bericht verzenden</button>
        </form>
  )
}

export default ContactForm
