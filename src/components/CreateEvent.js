import React, {useState, useEffect} from 'react'
import './../App.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import {
  createEvent,
  saveEvent,
} from '../actions'

const styles = {
  header: {
    // textAlign: 'start',
    // marginLeft: '.5em',
  },
  headerContainer: {
    display: 'flex',
    border: '1px solid #898989',
    borderLeftWidth: '0px',
    borderRightWidth: '0px',
    borderTopWidth: '0px',
    padding: '0px',
    maxWidth: '80%'
  },
  autocompleteInput: {
    width: '100%',
    border: '1px solid #898989',
    borderRadius: '2px',
    marginBottom: '10px',
    marginTop: '5px',
    padding: '5px',
    fontSize: '18px',
  },
  block: {
    margin: "2em 2em 2em 10em",
  },
}

function CreateEvent() {
  const [showDatePicker, toggleDatePicker ] = useState(false)
  const [event, updateEvent ] = useState({})
  
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBKhWn_Bl5erN1aNyT_OQV0g427wqMAWA0&libraries=places";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const togglePicker = () => {
    toggleDatePicker(true)
  }

  const saveEvent = () => {
    let newEvent  = {
      ...event
    }
    updateEvent(newEvent)
  }
  

  const { block, header, headerContainer, autocompleteInput } = styles
  return (
    <div style={block}>
      <div style={headerContainer}>
        <h2 id="headerNumber">1</h2>
        <h2 id="headerText" style={header}>Create Event</h2>
      </div>

      <div>
        <form className="event-form">
          <label for="title">Title</label>
          <input type="text" id="title" name="title"placeholder="Give it a short and distinct name" />

          <label  for="location">Location</label>
          {/* <input type="text" id="location" name="location" placeholder="Search for a venue or address"/>    */}

          <div>
            <img alt="*powered by google" src={'powered_by_google_on_white.png'} />
            <GooglePlacesAutocomplete 
              name="location"
              inputStyle={autocompleteInput}
              placeholder="Search for a venue or address"
              
            />
          </div>

          <div style={{display: 'flex'}}>            
            <div className="time-form">
              <label id="timeLabel" for="time">Starts</label><br />
              <input onSelect={() => togglePicker()} type="text" id="timeInput" name="location" value="4/18/20"/>    
              <input type="text" id="timeInput" name="location" value="8:01pm"/>    
            </div>
            
            <div className="time-form">
              <label id="timeLabel" for="time">Ends</label><br />
              <input type="text" id="timeInput" name="location" value="4/18/20"/>    
              <input type="text" id="timeInput" name="location" value="12:01pm"/>   
            </div>
          </div>

          {/* {showDatePicker?<div>
            <DayPicker />
          </div>: null} */}

          <label for="description">Event Description</label>
          <textarea id="description" placeholder="Include need-to-know information"></textarea>

          <div className="img-form">
            <label id="imgLabel" for="img">Event Image</label>
            <input id="img" type="file" accept="image/*"/>
          </div>

          <input onClick={() => this.saveEvent()} type="submit" value="SAVE" id="sendBtn"/>
        </form>
        
      </div>

      <div style={headerContainer}>
        <h2 id="headerNumber">2</h2>
        <h2 id="headerText" style={header}>Create Tickets</h2>
      </div>

      <div style={headerContainer}>
        <h2 id="headerNumber">3</h2>
        <h2 id="headerText" style={header}>Link Payment Provider(s)</h2>
      </div>      

      <div style={headerContainer}>
        <h2 id="headerNumber">4</h2>
        <h2 id="headerText" style={header}>Additional Settings</h2>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = state => {
  const { event } = state.event

  return {
    event
  }
}

const mapDispatchToProps = { createEvent, saveEvent }

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);