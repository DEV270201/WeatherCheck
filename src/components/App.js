import React from "react";
import Heading from "./Heading";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import WeatherInfo from "./WeatherInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      color: "#434343",
      error: null
    }
  }

  search_item = async (item) => {
    //insert the item inside the url
    try {
      let response = await fetch(/*place your url*/);
      let responseJson = await response.json();
      if (responseJson.cod === '404') {
        this.setState({ error: "City Not Found!!", weather: null });
        return;
      }
      this.setState({ weather: responseJson },
        () => this.backgroundChange()
      );
    } catch (exception) {
      this.setState({ error: "Sorry,something went wrong!", weather: null });
    }
  }

  backgroundChange = () => {
    const weatherObj = {
      "Haze": "#A55C1B",
      "Mist": "#A55C1B",
      "Clouds": "#2C3E50",
      "Smoke": "#BEB7A4",
      "Fog": "#BEB7A4",
      "Rain": "#04619F",
      "Snow": "#DCE8E0",
    }

    if (this.state.weather.weather[0].main in weatherObj) {
      this.setState({ color: weatherObj[this.state.weather.weather[0].main] });
    } else {
      this.setState({ color: "#83EAF1" });
    }
  }

  dismissAlert = () => {
    this.setState({ error: null });
  }

  render() {
    return (
      <>
        <div className="main">
          <Heading />
          <br />
          {
            this.state.error &&
            <div className="alert alert-warning" role="alert">
              {this.state.error}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.dismissAlert}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          }
          <div className="d-flex justify-content-center">
            <div className="App_contain" style={{ background: `linear-gradient(-45deg,#000000,${this.state.color})` }}>
              <Header />
              <br />
              <Input search={this.search_item} />
              <br />
              <div className="mt-5">
                <WeatherInfo weather={this.state.weather} />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;