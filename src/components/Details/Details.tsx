import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {

    const currentMovie = useSelector(store => store.currentMovie);

    const goToHome = () => {

        history.push(`/`)
    }


  return (
    <div>

    </div>
  );
}

export default Details;