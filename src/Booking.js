import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import { Button } from "reactstrap";
import { withStyles } from '@material-ui/core/styles';
 

const axios = require('axios');

export default class Booking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: this.props.theDate,
          nom: '',
          prenom: '',
          email: '',
          societe: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValid = this.handleValid.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    createList() {
      const data = new FormData();
      data.append('date',  this.props.theDate);
      data.append('nom',  this.state.nom);
      data.append('prenom', this.state.prenom);
      data.append('email', this.state.email);
      data.append('societe', this.state.societe);
      axios.post('https://events.telkea.com/static/php/csv.php', data)
    }
   
    handleValid(event) {
      if(this.state.nom != '' && this.state.prenom != '' && this.state.email != '' ){
        this.toggle(this.state)
        this.validate(this.state)
        this.send(this.state)
      }else{
        alert('Formulaire incomplet')
      }
    }

    handleCancel(event) {
      this.toggle(this.state)
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
        this.setState({
          [name]: value
        });
      }

    toggle = (book) => {
      console.log(book)
      this.props.toggle(book);
    }
    validate = (status) => {
      this.props.validateForm(status);
    }
    send = (e) => {
        this.createList()
        // this.getLists()
      }

    render() {
      return (
        <form >
            <div className="semiInput">
              <div className="form__group field">
                <input  type="text" name="nom" value={this.state.nom} onChange={this.handleInputChange}  className="form__field" placeholder="Nom" id='name' />
                <label htmlFor="name" className="form__label">Nom</label>
              </div>
              <div className="form__group field">
                <input  type="text" name="prenom" value={this.state.prenom} onChange={this.handleInputChange}  className="form__field" placeholder="Prénom" id='prenom' />
                <label htmlFor="prenom" className="form__label">Prénom</label>
              </div>
                {/* <label>
                Nom:
                <input type="text" name="nom" value={this.state.nom} onChange={this.handleInputChange} />
                </label> */}

                {/* <label>
                    Prénom:
                    <input type="text" name="prenom"  value={this.state.prenom} onChange={this.handleInputChange} />
                </label> */}
            </div>

            <div className="inputRow">
              <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}  className="form__field" placeholder="Email" id='email' />
              <label htmlFor="email" className="form__label">E-mail</label>
            </div>
          {/* <label>
            Email:
            <input type="text" name="email"  value={this.state.email} onChange={this.handleInputChange} />
          </label> */}
           <div className="inputRow">
              <input type="text" name="societe" value={this.state.societe} onChange={this.handleInputChange}  className="form__field" placeholder="Societe" id='societe' />
              <label htmlFor="societe" className="form__label">Société</label>
            </div>
          {/* <label>
            Société:
            <input type="text" name="societe"  value={this.state.societe} onChange={this.handleInputChange} />
          </label> */}
          <StyledCancel id="cancel" onClick={this.handleCancel}>Annuler</StyledCancel>
          <StyledValid id='send' onClick={this.handleValid}>Réserver</StyledValid>
        </form>
      );
    }
  }
  
  const StyledValid = withStyles({
    root: {
      background: 'linear-gradient(60deg, #FF4901 0%, #AE4A34 50%, #7E3300 80%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 75,
      width: 150,

      float: 'right',
      padding: '0 30px',      
      boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, .3)',

    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

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