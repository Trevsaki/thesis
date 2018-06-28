import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
// import Table from "components/Table/Table.jsx";
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
// import Button from 'components/CustomButtons/Button.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import Language from '@material-ui/icons/Language';

import { fetchWeather } from '../../actions/weather';

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
};

class Widgets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: 78702,
    };
  }

  componentDidMount() {
    this.props.fetchWeather(this.state.zipcode);
  }

  render() {
    const { classes } = this.props;
    let weatherView;
    if (this.props.weather.fetched) {
      const city = this.props.weather.weatherData.name;
      const { temp } = this.props.weather.weatherData.main;
      const { humidity } = this.props.weather.weatherData.main;

      weatherView = (
        <div>
          <p> City: {city} </p>
          <p> Current Temp: {temp} </p>
          <p> Humidity: {humidity} %</p>
        </div>
      );
    } else {
      weatherView = (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

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
                        <Language />
                      </CardIcon>
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Weather</h4>
                      { weatherView }
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Language />
                      </CardIcon>
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>News</h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Language />
                      </CardIcon>
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Traffic</h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="rose" icon>
                      <CardIcon color="rose">
                        <Language />
                      </CardIcon>
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Sports</h4>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  connect(null, mapDispatchToProps),
)(Widgets);

