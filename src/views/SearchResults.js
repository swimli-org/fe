import React from 'react'
import {
    BrowserRouter as useParams
  } from "react-router-dom";

export default function SearchResults(props) {
    const {term} =useParams()
    return (
        <div className="container">
            Showing results for <b>{term}</b>
        </div>

    )
}
