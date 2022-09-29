import React from "react";
import "./downloadApp.css";

function DownloadApp() {
  return (
    <div className="download">
      <div className="container">
        <h1 className="text">Download the app now.</h1>
        <p>
          Available on your favorite store. Start your premium experience now
        </p>

        <a
          className="btn-1"
          href="https://play.google.com/store/search?q=swiggy&c=apps"
          target="_blank"
          rel="noreferrer"
        >
          {window.innerWidth < 767 ? "Buy now" : "playstore"}
        </a>

        <a
          className="btn-2"
          href="https://www.apple.com/in/search/swiggy?src=globalnav"
          target="_blank"
          rel="noreferrer"
        >
          {window.innerWidth < 767 ? "Try for free" : "App Store"}
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
