/**
 * React
 */
import React from 'react'

/**
 * UI Components
 */

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emailSent: false,
      errors: []
    }
  }

  render () {
    return (
      <form>
          <div className="form-group">
              <label>Uw naam</label>
              <input type="text" className="form-control" name="user_name" />
          </div>
          <div className="form-group">
              <label>Uw emailadres</label>
              <input type="email" className="form-control" name="user_email" />
          </div>
          <div className="form-group">
              <label>Uw bericht</label>
              <textarea className="form-control" name="message" placeholder="Vertel ons over uw project, stel uw vraag of plaats uw opmerking."/>
          </div>
          <div className="form-check">
              <input className='form-check-input' type="checkbox" />
              <span className='form-check-label'>Ik ga akkoord dat bij het verzenden van dit formulier bovenstaande gegevens worden verstuurd aan Hoekstra & Veldhuis. Voor meer informatie, zie ons <a className="underlined" href="/documents/hoekstra-en-veldhuis-privacybeleid.pdf">privacybeleid</a>.</span>
          </div>
          <button type="submit" className="btn btn-outline-primary">Bericht verzenden</button>
      </form>
    )
  }
}

export default ContactForm
