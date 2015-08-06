/** @jsx React.DOM */

var React       = require('react');
var BookingForm = require("./booking-note-form.jsx");

var getJobNumber = require("../../lib/format-job-number.js");
var currentDate  = require("../../lib/current-date.js");
var formatDate  = require("../../lib/format-date.js");


// For emailing as a pdf, inine styling is required.
var bookingStyle = {
    width: "21cm",
    height: "29.7cm",
    padding: "1cm 1.9cm",
    fontFamily: "Verdana, Geneva, sans-serif",
    position: "relative"
}
var hr = {
    backgroundColor: "#49A4A5",
    height: "3px",
    width: "100%",
    marginBottom: "5px",
    fontWeight: "600",
    fontFamily: "Verdana, Geneva, sans-serif"
}

var h2 = {
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "18pt",
    padding: "15px 0 20px"
}

var p = {
    display: "block",
    fontSize: "11pt",
    color: "black"
}

var pRight = {
    display: "block",
    fontSize: "11pt",
    color: "black",
    textAlign: "right",
    marginBottom: "10px"
}

var pLeft = {
    display: "block",
    fontSize: "11pt",
    color: "black",
    marginBottom: "10px"
}

var pSmall = {
    display: "block",
    fontSize: "10pt",
    color: "#6E6E6E",
    margin: "0",
    padding: "0"
}

var halfRight = {
    float: "right",
    width: "50%",
    textAlign: "right"
}

var halfLeft = {
    float: "left",
    width: "50%",
}

var footer = {
    clear: "both",
    position: "relative",
    height: "6em",
    marginTop: "-3em"
}

var logoImg = {
    height: "60pt",
    float: "right",
    marginTop: "20px"
}

var logoText = {
    height: "64pt",
    margin: "20px 0 10px"
}

var contactDetails = {
    marginTop: "20px",
    float: "right"
}

var p = {
    display: "inline-block",
    fontSize: "11pt",
    color: "#484848"
}

var container = {
    height: "90%"
}
 
var bookingNotePage = React.createClass({
    getDefaultProps: function () {
        return {
            order: {},
            units: []  
        };
    },
    render: function() {

        return (
            <div id="form" className="booking-note container" style={bookingStyle}>
                <div style={container}>
                    <div>
                        {/* <img style={logoImg} src="http://carrierpigeonfac-se-env.elasticbeanstalk.com/img/logo.png"/> */}
                        <img style={logoText} src="./img/logo-text.png"/>
                        {/* <img style={img} src="http://carrierpigeonfac-se-env.elasticbeanstalk.com/img/logo-text.png"/> */}
                        <div style={contactDetails}>
                            <p style={pSmall}> Tel +44 020 7510 9625 </p>
                            <p style={pSmall}> Fax +44 020 7510 9401 </p>
                            <p style={pSmall}> info@cootfreight.co.uk </p>
                            <p style={pSmall}> www.cootfreight.co.uk </p>
                        </div>
                        <p style={p}> Davenport House, 16 Pepper Street, London E14 9RP, England </p>
                        <hr style={hr}/> 
                    </div>

                    <h2 style={h2}>Booking Request</h2>
                    
                    <div style={halfLeft}>
                        <p style={pLeft}><b> Date: </b> { this.props.order.date ? formatDate(this.props.order.date) : "" }</p>
                    </div>

                    <div style={halfRight}>
                        <p id="job-number" style={pRight}><b> Job no: </b> {getJobNumber(this.props.order.job_number)}</p>
                    </div>
                    
                    <div>
                        <BookingForm order={this.props.order} units={this.props.units}/>
                    </div>

                    <br />
                </div>
                <div style={footer}>
                    <hr style={hr}/>
                    <div style={halfRight}>
                        <p style={pSmall}> All business is subject to the current </p>
                        <p style={pSmall}> standing conditions of the BIFA copies </p>
                        <p style={pSmall}> of which are available on request </p>
                    </div>
                    <div style={halfLeft}>
                        <p style={pSmall}> Coot Freight Ltd. Registered in England </p>
                        <p style={pSmall}> No.07880722 </p>
                        <p style={pSmall}> VAT No. GB 128 2159 22</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = bookingNotePage;
