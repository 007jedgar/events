import React, {useState, useEffect} from 'react'
import './../App.css';
// import { Form, FormInput, FormGroup } from "shards-react";
// import Autocomplete from 'react-google-autocomplete';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { connect } from 'react-redux';
import {
  createEvent
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
  formContainer: {
    // margin: '2em'
  },
  label: {
    // textAlign: 'start',
    // alignSelf: 'flex-start'
  },
  block: {
    margin: "2em 2em 2em 10em",
  },
}

function CreateEvent() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBKhWn_Bl5erN1aNyT_OQV0g427wqMAWA0&libraries=places";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const { block, header, headerContainer, formContainer, label } = styles
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
          <input type="text" id="location" name="location" placeholder="Search for a venue or address"/>   

          <label for="description">Event Description</label>
          <textarea id="description" placeholder="Include need-to-know information"></textarea>

        </form>
        
      </div>

      <div style={headerContainer}>
        <h2 id="headerNumber">2</h2>
        <h2 id="headerText" style={header}>Create Tickets</h2>
      </div>

      <div style={headerContainer}>
        <h2 id="headerNumber">3</h2>
        <h2 id="headerText" style={header}>Payment Provider(s)</h2>
      </div>      

      <div style={headerContainer}>
        <h2 id="headerNumber">4</h2>
        <h2 id="headerText" style={header}>Additional Settings</h2>
      </div>
      
      
    </div>
  )
}

const mapStateToProps = state => {
  const {  } = state.event

  return {

  }
}

const mapDispatchToProps = { createEvent }

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);