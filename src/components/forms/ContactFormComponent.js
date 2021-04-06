/**
 * React
 */
import * as React from 'react'
import { useForm } from 'react-hook-form'

/**
 * Next
 */
import { useRouter } from 'next/router'

/**
 * Axios
 */
import axios from 'axios'

/**
 * Styling
 */
import styles from '../../styles/forms/ContactFormComponent.module.css'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const router = useRouter()
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
      if (response.status === 200) {
        reset()
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmitForm)} className={styles.contactForm}>
            <div className={`form-group ${styles.group}`}>
                <label>Uw naam</label>
                <input
                    {...register('name', { required: true })}
                    type="text"
                    name="name"
                    className={errors.name ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors.name && 'Uw naam is een verplicht veld.'}
                </small>
            </div>
            <div className={`form-group ${styles.group}`}>
                <label>Uw emailadres</label>
                <input
                    {...register('email', { required: true })}
                    type="email"
                    name="email"
                    className={errors.email ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors.email && 'Op welk e-mailadres kunnen we u bereiken?'}
                </small>
            </div>
            <div className={`form-group ${styles.group}`}>
                <label>Hoe kunnen we u van dienst zijn?</label>
                <textarea
                    {...register('message', { required: true })}
                    name="message"
                    placeholder="Vertel ons over uw project, stel uw vraag of plaats uw opmerking."
                    className={errors.message ? `form-control ${styles.error}` : 'form-control'}
                />
                <small className={'form-text text-muted'}>
                    {errors.message && 'Hoe kunnen we u helpen? Laat een bericht achter!'}
                </small>
            </div>
            <div className={`form-check ${styles.group}`}>
                <input
                    {...register('privacyCheck', { required: true })}
                    name='privacyCheck'
                    id='privacyCheck'
                    type='checkbox'
                    className={errors.privacyCheck ? `form-check-input ${styles.error}` : 'form-check-input'}
                />
                <label
                    htmlFor='privacyCheck'
                    className={`form-check-label ${styles.checkboxLabel}`}
                >
                    Ik ga akkoord dat bij het verzenden van dit formulier bovenstaande gegevens worden verstuurd aan Hoekstra & Veldhuis. Voor meer informatie, zie ons <a className="underlined" href="/documents/hoekstra-en-veldhuis-privacybeleid.pdf">privacybeleid</a>.
                </label>
            </div>
            <button type="submit">Bericht verzenden</button>
        </form>
  )
}

export default ContactForm
