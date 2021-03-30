/**
 * React
 */
import React from 'react'

/**
 * UI Components
 */

/**
 * EmailJS
 */
import emailjs from 'emailjs-com'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emailSent: false,
      input: {
        user_name: '',
        user_email: '',
        message: '',
        privacyCheck: false
      },
      valid: {
        user_name: false,
        user_email: false,
        message: false,
        privacyCheck: false
      },
      errors: {
        user_name: null,
        user_email: null,
        message: null,
        privacyCheck: null
      }
    }
    this._sendMail = this._sendMail.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  _validateInput () {
    return false
  }

  _handleChange (event) {
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    })
  }

  _sendMail (event) {
    event.preventDefault()
    this._validateInput()

    if (this._validateInput()) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, event.target, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
        .then(() => console.log('Done'))
        .catch((e) => console.log(e))
    }
  }

  render () {
    return (
        <>
            <form onSubmit={this._sendMail}>
                <div className="form-group">
                    <label>Uw naam</label>
                    <input type="text" className="form-control" name="user_name" value={this.state.input.name} onChange={this._handleChange}/>
                </div>
                <div className="form-group">
                    <label>Uw emailadres</label>
                    <input type="email" className="form-control" name="user_email" value={this.state.input.email} onChange={this._handleChange}/>
                </div>
                <div className="form-group">
                    <label>Uw bericht</label>
                    <textarea className="form-control" name="message" placeholder="Vertel ons over uw project, stel uw vraag of plaats uw opmerking." value={this.state.input.message} onChange={this._handleChange}/>
                </div>
                <div className="form-check">
                    <input className='form-check-input' name="privacyCheck" type="checkbox" checked={this.state.input.privacyChecked} onChange={this._handleChange}/>
                    <span className='form-check-label'>Ik ga akkoord dat bij het verzenden van dit formulier bovenstaande gegevens worden verstuurd aan Hoekstra & Veldhuis. Voor meer informatie, zie ons <a className="underlined" href="/documents/hoekstra-en-veldhuis-privacybeleid.pdf">privacybeleid</a>.</span>
                </div>
                <button type="submit" className="btn btn-outline-primary">Bericht verzenden</button>
            </form>
        </>
    )
  }
}

export default ContactForm
