// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickImage = () => {
    setActiveEventId(id)
  }

  const imageClassName = isActive ? 'event-image active' : 'event-image'
  return (
    <li className="each-event-item">
      <button type="button" className="img-button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="title">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
