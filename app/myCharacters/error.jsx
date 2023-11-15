'use client' // This is a node.js command that tells the server to use the client-side javascript interpreter for this file

import { useState, useEffect } from 'react'

const Error = ({error, reset}) => {

  useEffect(() => {
    console.log("Error: " + error)
  }, [error]);

  return (
    <div>
      <h1> Error </h1>
      <p> {error} </p>
      <button onClick={() => reset()}> Try Again </button>
    </div>
  );
}

export default Error;