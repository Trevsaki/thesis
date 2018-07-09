import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import PropTypes from 'prop-types';

// @material-ui/core components

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// redux actions

import { } from '../../actions/weather';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class NewsWidgetModal extends React.Component {
  state = {
    searchTerm: '',
  };

  onInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  onSubmit() {
    const { widgetName } = this.props.weather;
    this.props.fetchWeather(this.state.searchTerm);
    // need to get user id from redux state
    this.props.saveWidgetConfig(1, widgetName, this.state.searchTerm);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.close}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Enter New Search Term
            </Typography><br />
            <Typography variant="subheading" id="simple-modal-description">
              Lookup: <input
                type="text"
                onChange={this.onInputChange.bind(this)}
                value={this.state.searchTerm}
              ></input>
              <Button onClick={() => { this.onSubmit(); this.props.close(); }} type="submit">Submit</Button>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

NewsWidgetModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ }, dispatch);
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(NewsWidgetModal);
