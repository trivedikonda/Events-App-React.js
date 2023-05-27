// Write your code here
import './index.css'

const imageStatusConstants = {
  notYetRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const noActiveEventView = () => (
    <div className="active-event-registration-details-container">
      <p className="paragraph">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const yetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        height={300}
        width={300}
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <p className="paragraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you feel totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-container">
      <img
        height={100}
        width={100}
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1 className="registered-msg">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="reg-closed-container">
      <img
        height={300}
        width={300}
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1 className="registrations-closed-msg">
        Registrations Are Closed Now!
      </h1>
      <p className="para">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const {activeEventRegistrationStatus} = props
  const getRegistrationStatus = () => {
    switch (activeEventRegistrationStatus) {
      case imageStatusConstants.notYetRegistered:
        return yetToRegisterView()
      case imageStatusConstants.registered:
        return registeredView()
      case imageStatusConstants.registrationsClosed:
        return registrationsClosedView()
      default:
        return noActiveEventView()
    }
  }

  return <>{getRegistrationStatus()}</>
}

export default ActiveEventRegistrationDetails
