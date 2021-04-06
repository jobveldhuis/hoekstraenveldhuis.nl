/**
 * React
 */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

/**
 * Axios
 */
import axios from 'axios'

/**
 * Toast
 */
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Styling
 */
import styles from '../../styles/forms/ContactFormComponent.module.css'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [formSending, setFormSending] = useState(false)

  async function onSubmitForm (values) {
    setFormSending(true)
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
        toast.success('Je bericht is succesvol verzonden. We doen ons uiterste best om alle berichten binnen 24 uur te beantwoorden.')
      } else {
        toast.error('Er ging iets mis tijdens het verzenden van het formulier. Probeer het later opnieuw of stuur een mail naar info@henv.online.')
      }
    } catch (err) {
      toast.error('Er ging iets mis tijdens het verzenden van het formulier. Probeer het later opnieuw of stuur een mail naar info@henv.online.')
    }

    setFormSending(false)
  }
  return (
      <>
          <ToastContainer

          />
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
              <button type="submit" disabled={formSending}>Bericht verzenden</button>
          </form>
          </>
  )
}

export default ContactForm
