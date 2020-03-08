import React, {useState, useEffect} from 'react'
import './../App.css';
import { Form, FormInput, FormGroup } from "shards-react";
import Autocomplete from 'react-google-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
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
    borderWidth: '2px 3px',
    borderColor: '#000',
  },
  formContainer: {
    // margin: '2em'
  },
  label: {
    // textAlign: 'start',
    // alignSelf: 'flex-start'
  },
  block: {
    margin: "2em 2em 2em 5em",
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
        <h2 style={header}>Create Event</h2>
      </div>

      <div>
        <form className="event-form">
          <label for="title">Title</label>
          <input type="text" id="title" name="title"placeholder="Give it a short and distinct name" />

          <label  for="location">Location</label>
          <input type="text" id="location" name="location" placeholder="Search for a venue or address"/>   

          <label for="description">Event Description</label>
          <textarea id="description" placeholder="Include need-to-know information"></textarea>

          <input type="submit" value="Save" id="sendBtn"/>
        </form>
        
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