import React from 'react';

const Welcome = () => {
  return (
    <div id="welcome">
      <h1 id="appname">AMA Now</h1>
      <h2>What Is This?</h2>
      <p id="desc">
        AMA Now is a web application that allows Redditors to schedule questions to be posted to AMAs
        before their threads go live. Users can ask their questions without worrying
        about scheduling conflicts.
      </p>
      <h2>Getting Started</h2>
      <p id="startDesc">
        To get started, click on the button below. This will take you to an authorization
        page, where you can connect the app to your Reddit account for use. Once you are authorized,
        you will be redirected to a submission page where you can write your question.
      </p>
      <a id="authButton" href="https://www.reddit.com/api/v1/authorize?client_id=kPpo2pzRIdkrMw&response_type=code&state=randomstring&redirect_uri=http://amanow.surge.sh/submit&duration=permanent&scope=submit identity">
        Authorize
      </a>
    </div>
  );
};


export default Welcome;
