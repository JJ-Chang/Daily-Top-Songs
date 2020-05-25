import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getChart } from 'billboard-top-100';
const BillboardCrawler = require('billboard-crawler');

const API_KEY = '809bb68086a353d5de0a725772a92543';
const USER_AGENT = 'TopSongsDemoSite';
const billboard = new BillboardCrawler();
const headers = { 'user-agent': USER_AGENT };
const REQUEST = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

class App extends Component {
    retrieveChart() {
        getChart('hot-100', function(err, chart) {
            if (err) console.log(err);
            console.log(chart.week); // prints the week of the chart in the date format YYYY-MM-DD
            console.log(chart.previousWeek.url); // prints the URL of the previous week's chart
            console.log(chart.previousWeek.date); // prints the date of the previous week's chart in the date format YYYY-MM-DD
            console.log(chart.nextWeek.url); // prints the URL of the next week's chart
            console.log(chart.nextWeek.date); // prints the date of the next week's chart in the date format YYYY-MM-DD
            console.log(chart.songs); // prints array of top 100 songs for week of August 27, 2016
            console.log(chart.songs[3]); // prints song with rank: 4 for week of August 27, 2016
            console.log(chart.songs[0].title); // prints title of top song for week of August 27, 2016
            console.log(chart.songs[0].artist); // prints artist of top songs for week of August 27, 2016
            console.log(chart.songs[0].rank); // prints rank of top song (1) for week of August 27, 2016
            console.log(chart.songs[0].cover); // prints URL for Billboard cover image of top song for week of August 27, 2016
        });
    }

    getChart() {
        billboard.getChart('Hot-100');
    }

    getLastFM() {
        fetch(REQUEST, { method: 'GET', headers: headers })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                  <h1> { this.getLastFM() } </h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
export default App;
