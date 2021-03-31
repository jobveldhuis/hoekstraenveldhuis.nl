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
        privacyCheck: false,
        form: false
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

  _validateInput (field, value) {
    switch (field) {
      case 'user_name': {
        const isValid = !(value === '')
        this.setState((prevState) => (
          {
            valid: {
              ...prevState.valid,
              user_name: isValid,
              form: isValid && prevState.valid.user_email && prevState.valid.message && prevState.valid.privacyCheck
            },
            errors: {
              ...prevState.errors,
              user_name: isValid ? null : 'Vul alstublieft een naam in.'
            }
          }
        ))
        break
      }
      case 'user_email': {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isValid = re.test(String(value).toLowerCase())
        this.setState((prevState) => (
          {
            valid: {
              ...prevState.valid,
              user_email: isValid,
              form: isValid && prevState.valid.user_name && prevState.valid.message && prevState.valid.privacyCheck
            },
            errors: {
              ...prevState.errors,
              user_email: isValid ? null : 'Vul een geldig e-mailadres in.'
            }
          }
        ))
        break
      }
      case 'message': {
        const isValid = !(value === '')
        this.setState((prevState) => (
          {
            valid: {
              ...prevState.valid,
              message: isValid,
              form: isValid && prevState.valid.user_email && prevState.valid.user_email && prevState.valid.privacyCheck
            },
            errors: {
              ...prevState.errors,
              message: isValid ? null : 'Vergeet u geen bericht achter te laten?'
            }
          }
        ))
        break
      }
      case 'privacyCheck': {
        this.setState((prevState) => (
          {
            valid: {
              ...prevState.valid,
              privacyCheck: value,
              form: value && prevState.valid.user_name && prevState.valid.user_email && prevState.valid.message
            },
            errors: {
              ...prevState.errors,
              privacyCheck: value ? null : 'Vergeet niet akkoord te gaan met onze privacyvoorwaarden.'
            }
          }
        ))
        break
      }
      default:
        break
    }
  }

  _handleChange (event) {
    const value = event.target.name === 'privacyCheck' ? event.target.checked : event.target.value
    this.setState({
      input: {
        ...this.state.input,
        [event.target.name]: value
      }
    }, () => this._validateInput(event.target.name, value))
  }

  _sendMail (event) {
    event.preventDefault()

    if (this.state.valid.form) {
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
                    <input className='form-check-input' name="privacyCheck" type="checkbox" checked={this.state.input.privacyCheck} onChange={this._handleChange}/>
                    <span className='form-check-label'>Ik ga akkoord dat bij het verzenden van dit formulier bovenstaande gegevens worden verstuurd aan Hoekstra & Veldhuis. Voor meer informatie, zie ons <a className="underlined" href="/documents/hoekstra-en-veldhuis-privacybeleid.pdf">privacybeleid</a>.</span>
                </div>
                <button type="submit" className="btn btn-outline-primary" disabled={!this.state.valid.form}>Bericht verzenden</button>
            </form>
        </>
    )
  }
}

export default ContactForm
