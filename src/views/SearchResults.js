import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function SearchResults(props) {
    const {term} =useParams()
    return (
        <div className="container">
            You searched for <b>{term}</b>
        </div>

    )
}
