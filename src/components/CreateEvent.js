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
    textAlign: 'start',
    marginLeft: '.5em',
  },
  headerContainer: {
    borderWidth: '2px 3px',
    borderColor: '#000',
  },
  formContainer: {
    margin: '2em'
  },
  label: {
    textAlign: 'start'
  }
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

  const { header, headerContainer, formContainer, label } = styles
  return (
    <div >
      <div style={headerContainer}>
        <h2 style={header}>Create Event</h2>
      </div>

      <div style={formContainer}>
        <Form >
          <FormGroup>
            <label className="form-label" htmlFor="#title">Event Title</label>
            <FormInput id="#title" autocomplete={false} placeholder="Give a short distinct name" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="#location">Location</label>
            <FormInput id="#location" placeholder="Search for a venue or address" />
          </FormGroup>
        </Form>
        <div>

        </div>
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