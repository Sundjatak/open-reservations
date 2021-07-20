import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Moment from 'moment';
import 'moment/locale/fr'
import { ReactComponent as Tennis } from './assets/img/SVG/tennis.svg';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
const initialState = {
       loading: true,
       alldata: {} 
};

export default class Calendar extends React.Component {
    state = initialState
    componentDidMount() {
      this.getLists()
    }
    render() {
      const data = this.state.alldata
      return (
      <div className='calendar'>
        <div>
          <span className="logo"></span>
          <Tennis />
          <h1>
            Réservations
          </h1>
        </div>
      
          <ul>
          {Object.keys(data).map((item, i) => (
            <li className="card-resa">
              <div className="card-head">
                <span className="card-date">
                  {Moment(data[item].date).format('Do MMMM')}
                </span>
              </div>
              <div className="card-body">
                <div className="card-identity">
                  <span>
                  {data[item].prenom}
                   {data[item].nom}
                  </span>
                </div>
                <div className="card-mail">
                  <span>
                  {data[item].email}

                  </span>
                </div>
              </div>
              <div className="card-footer">
                <div className="card-society">
                  <span>
                    {data[item].societe}
                  </span>
                </div>
              </div>
            </li>
           ))}
          </ul>
       
        {/* {this.state.alldata.map((item, index) => (
            <div>item.nom</div>
          ))}  */}
      {/* <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, dayGridPlugin ]}
        initialView="dayGridWeek"
        dateClick={this.handleDateClick}
        updateSize
        initialDate="2021-08-01"
        contentHeight='auto'
      /> */}  
    </div>
    )}
    
    getLists() {
      fetch('https://my-json-server.typicode.com/sundjatak/open-reservations/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
       })
        .then((response) => response.json())
        .then((json) => this.setState({
          loading: false,
          alldata: json
          }),
        );
        // fetch("https://my-json-server.typicode.com/sundjatak/open-reservations/posts")
        //   .then(res => res.json())
        //   .then(result =>
        //     this.setState({
        //       loading: false,
        //       alldata: result
        //     }),
        //   )
        //   .catch(console.log);
    }
}
