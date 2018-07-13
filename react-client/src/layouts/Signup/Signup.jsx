import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { compose } from 'redux';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
// import CardAvatar from 'components/Card/CardAvatar.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import avatar from 'assets/img/faces/marc.jpg';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      zip: '',
      particleToken: '',
    };
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.enterZip = this.enterZip.bind(this);
    this.enterParticleToken = this.enterParticleToken.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  enterPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  enterEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  enterZip(e) {
    this.setState({
      zip: e.target.value,
    });
  }

  enterParticleToken(e) {
    this.setState({
      particleToken: e.target.value,
    });
  }

  handleSubscribe() {
    const { history } = this.props;
    axios.post('/subscribe', {
      email: this.state.email,
      password: this.state.password,
      zip: this.state.zip,
      particleToken: this.state.particleToken,
    })
      .then((res) => {
        console.log(res.data);
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log('HELLOOOOOOOOSUBSCRIBE.', err.data);
        alert('Username Taken.');
      // history.push('/login');
      });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubscribe();
    }
  }

  render() {
    const { classes } = this.props;

    return (
    <div style={{ margin: '70px' }}>
      <Grid container justify='center'>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary">
            <img src='../../assets/img/hardybotlogo.png' style={{ width: '100px' }}/>
              <p className={classes.cardCategoryWhite}>Sign up</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: this.state.email,
                      onChange: this.enterEmail,
                      onKeyPress: this.handleKeyPress,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: this.state.password,
                      onChange: this.enterPassword,
                      onKeyPress: this.handleKeyPress,
                      type: 'password',
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="ZIP Code"
                    id="zipCode"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: this.state.zip,
                      onChange: this.enterZip,
                      onKeyPress: this.handleKeyPress,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Particle Token"
                    id="particle_token"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: this.state.particleToken,
                      onChange: this.enterParticleToken,
                      onKeyPress: this.handleKeyPress,
                    }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary"
              fullWidth={true}
              onClick={this.handleSubscribe}>Sign up</Button>
            </CardFooter>
            <div style={{ textAlign: 'center' }}>
              <p>Already have an account? <a className='login' href='/login'>Login</a></p>
              <p>Get Particle Token <a className='particleToken' href='https://login.particle.io/login'>here</a></p>
            </div>
          </Card>
        </GridItem>
      </Grid>
    </div>
    );
  }
}

export default compose(withStyles(styles, withRouter)(Signup));