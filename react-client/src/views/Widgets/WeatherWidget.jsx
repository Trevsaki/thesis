import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

class WeatherWidget extends React.Component {
  render() {
    if (this.props.weather.fetched) {
      let { temp, pressure, humidity } = this.props.weather.weatherData.main;
      let { name, wind } = this.props.weather.weatherData;
      return (
        <div style={{
            width: '550px', opacity: '.75', float: 'right',
        }}>
            <div style={{
                width: '50%', float: 'left', minHeight: '150px', position: 'relative',
            }}>
                <span style={{ position: 'absolute', bottom: '0' }}><h1 style={{ color: 'black', fontSize: '72px', margin: '10px' }}><strong>{temp}°</strong></h1></span>
            </div>
            <div style={{ width: '50%', float: 'right' }}>
                <div style={{
                    textAlign: 'right', padding: '10px', color: 'black', fontSize: '36px',
                }}>{name}</div>
                <div style={{ textAlign: 'right', minHeight: '106px', padding: '0px 10px' }}>
                    <p style={{ margin: '0px', color: 'black' }}>HUMIDITY: <strong>{humidity}%</strong></p>
                    <p style={{ margin: '0px', color: 'black' }}>WIND: <strong>{wind.speed}MPH</strong></p>
                </div>
            </div>
            <div style={{
                width: '100%', display: 'table', tableLayout: 'fixed', minHeight: '50px',
            }}>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    SUN
        <p><strong>87°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    MON
        <p><strong>92°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    TUE
        <p><strong>93°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    WED
        <p><strong>99°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    THU
        <p><strong>89°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    FRI
        <p><strong>92°</strong></p>
                </div>
                <div style={{ display: 'table-cell', textAlign: 'center', color: 'black' }}>
                    SAT
        <p><strong>101°</strong></p>
                </div>
            </div>
        </div>
      );
    } else {
      return (
            <div>
                <p>Loading...</p>
            </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default compose(connect(mapStateToProps))(WeatherWidget);
