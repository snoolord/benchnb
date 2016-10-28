import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById("root");
    console.log("hi from render");
    ReactDOM.render(<h2>Welcome to BenchNB</h2>, rootEl );
});
