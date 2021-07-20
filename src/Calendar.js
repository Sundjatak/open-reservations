import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Booking from './Booking';
import Moment from 'moment';
import 'moment/locale/fr'
import { ReactComponent as Tennis } from './assets/img/SVG/tennis.svg';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'


const initialState = {
        modal: false,
        theDate: "",
        valid: false
};
export default class Calendar extends React.Component {
    state = initialState
    toggle = (book) => {
        this.setState({ modal: !this.state.modal });
        if(book){
          this.setState({book})
        }
    };
    validateForm = (status) => {
      this.setState({ valid: true });
    };
    
    reset = () => {
      this.setState(initialState);
    };

  render() {
    Moment.locale('fr');
    console.log(this.state)
    if(this.state.modal){
      return (
        <div className='calendar'>
          <div className="modal-form">
            <div className="modal-header">
            Réserver à la date du  {Moment(this.state.theDate).format('Do MMMM')}
            </div>
            <div className="modal-body">
              <Booking toggle={this.toggle} theDate={this.state.theDate} validateForm={this.validateForm}/>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      )
    }else if(this.state.valid){
      return (
        <div className='calendar'>
          <div className="modal-form">
            <div className="modal-header">
              <h2>Confirmation de réservation</h2>
            </div>
            <div className="modal-body">
              <h3>Merci</h3>
              <span>
              {this.state.book.prenom}</span>
              <p>la réservation a bien été effectuée à la date du {Moment(this.state.theDate).format('Do MMMM')}</p>            
            </div>
            <div className="modal-footer">

              <StyledCancel id="cancel" onClick={this.reset}>Revenir au choix des réservations</StyledCancel>
            </div>
          </div>
        </div>
      )
    }else{
      return (
      <div className='calendar'>
      <div className='heading'>
         <span className="logo"></span>
          <h1>
            Réserver un Déjeuner
          </h1>
          <Tennis />
    </div>
    <span className='mention'>Merci de réserver au plus tard 24h avant la date de votre choix.</span>
    <div className="parent">
      <div className="item" onClick={(date) => this.handleDateClick('2021-07-31')} >
        <div className="heading">Samedi 31 Juillet</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-01')} >
        <div className="heading">Dimanche 1er Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-02')} >
        <div className="heading">Lundi 2 Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-03')} >
        <div className="heading">Mardi 3 Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-04')} >
        <div className="heading">Mercredi 4 Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-05')} >
        <div className="heading">Jeudi 5 Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-06')} >
        <div className="heading">Vendredi 6 Août</div>
        <div className="body"></div>
      </div>
      <div className="item" onClick={(date) => this.handleDateClick('2021-08-07')} >
        <div className="heading">Samedi 7 Août</div>
        <div className="body"></div>
      </div>
    </div>   
    {/* <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin, dayGridPlugin ]}
      initialView="dayGridWeek"
      dateClick={this.handleDateClick}
      updateSize
      initialDate="2021-08-01"
      contentHeight='auto'
     /> */}
    </div>)

    }
   
  }

  handleDateClick = (date) => { // bind with an arrow function
    var myDate = date.split("-");
    var resaDate = new Date( myDate[0], myDate[1] - 1, myDate[2]);
    const now = Date.now();
    var delay = resaDate.getTime() - now
    if(delay <= 86400000){
      alert("Merci de réserver au plus tard 24h avant la date de votre choix.")
    }else{
      var theDate = date
      this.toggle();
      this.setState({ theDate });
    }
  }
}

const StyledCancel = withStyles({
  root: {
    background: 'linear-gradient(45deg, #020202 30%, #0d0d0d 50%, #181818 75%, #0d0d0d 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    float: 'right',
    width: 150,
    height: 75,
    padding: '0 30px',
    margin: '0 30px',
    boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);