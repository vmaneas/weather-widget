import React from 'react';

// TODO: Work on wind direction
const Widget = props => (
    <div className="widget" style={{margin: 10, width: 300}}>
        <div className="panel panel-info">
            <div className="panel-heading">Weather in <b id="city_heading">{props.weatherData?.name}</b></div>
            <ul className="list-group">
                <li className="list-group-item">Temperature: <b>{props.weatherData?.main?.temp}°C</b></li>
                <li className="list-group-item">Humidity: <b>{props.weatherData?.main?.humidity}%</b></li>
                <li className="list-group-item">Wind: <b>{props.weatherData?.wind?.speed} m/s Øst</b></li>
                <li className="list-group-item">
                <form 
                    className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city"
                            placeholder="City"
                            onChange={props.handleQuery}> 
                        </input>
                    </div>
                    <button 
                        type="button"
                        id="search_button" 
                        className="btn btn-default"
                        onClick={props.getWeather}>Search
                    </button>
                </form>
                </li>
            </ul>
        </div>
    </div>
)

export default Widget;
