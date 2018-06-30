import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
// import Table from "components/Table/Table.jsx";
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import Language from '@material-ui/icons/Language';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import WbSunny from '@material-ui/icons/WbSunny';
import GolfCourse from '@material-ui/icons/GolfCourse';

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

function DeviceProfiles(props) {
  const { classes } = props;
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>MVP Profile</h4>
          </CardHeader>
          <CardBody>
            <Grid container>
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                    <WbSunny />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Weather</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
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
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <DirectionsCar />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Traffic</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <GolfCourse />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Sports</h4>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
            <Button color="primary">Edit Profile</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Thesis Profile</h4>
          </CardHeader>
          <CardBody>
            <Grid container>
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <WbSunny />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Weather</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
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
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <DirectionsCar />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Traffic</h4>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <GolfCourse />
                    </CardIcon>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Sports</h4>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
            <Button color="primary">Edit Profile</Button>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default withStyles(styles)(DeviceProfiles);
