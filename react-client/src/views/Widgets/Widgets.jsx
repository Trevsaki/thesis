import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import io from 'socket.io-client';
import axios from 'axios';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
// import Table from "components/Table/Table.jsx";
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import Language from '@material-ui/icons/Language';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import WbSunny from '@material-ui/icons/WbSunny';
import GolfCourse from '@material-ui/icons/GolfCourse';
import WeatherWidget from './WeatherWidget.jsx';
import StocksWidget from './StocksWidget.jsx';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
  cardTitleBlack: {
    color: '#000',
    marginTop: '13px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};

class Widgets extends React.Component {
  constructor(props) {
    super(props);

    // Quick button click handlers for demonstration
    this.startStocksPolling = this.startStocksPolling.bind(this);
    this.stopStocksPolling = this.stopStocksPolling.bind(this);
    this.startWeatherPolling = this.startWeatherPolling.bind(this);
    this.stopWeatherPolling = this.stopWeatherPolling.bind(this);
  }

  componentDidMount() {
    axios.get('/particle/login')
      .then((res) => {
        console.log(res.data);
        this.startWeatherPolling();
        this.startStocksPolling();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.stopStocksPolling();
    this.stopWeatherPolling();
  }

  startStocksPolling() {
    axios.get('/api/stocks')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  startWeatherPolling() {
    axios.get('/api/weather')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  stopStocksPolling() {
    axios.get('/api/stocks/close')
      .then((res) => {
        console.log(res.data);
      });
  }

  stopWeatherPolling() {
    axios.get('/api/weather/close')
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Widgets</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <WbSunny />
                      </CardIcon>
                      <h4 className={classes.cardTitleBlack}>Weather</h4>
                    </CardHeader>
                    <CardBody>
                      <WeatherWidget />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Language />
                      </CardIcon>
                      <h4 className={classes.cardTitleBlack}>Stocks</h4>
                    </CardHeader>
                    <CardBody>
                      <StocksWidget />
                    </CardBody>
                  </Card>
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <DirectionsCar />
                      </CardIcon>
                      <h4 className={classes.cardTitleBlack}>Traffic</h4>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <GolfCourse />
                      </CardIcon>
                      <h4 className={classes.cardTitleBlack}>Sports</h4>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                  </Card>
                </GridItem> */}
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchWeather }, dispatch);
// };

// Need access to user info in order to get zipcode for initial weather load
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withStyles(styles)(Widgets);

