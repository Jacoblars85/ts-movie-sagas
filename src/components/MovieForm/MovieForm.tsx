import React from 'react';

function MovieForm() {

  return (
    <div>
    <h2>Add a Movie</h2>

    <input type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput} />

    <input type="text"
        placeholder="Enter Description"
        onChange={(e) => setDescriptionInput(e.target.value)}
        value={descriptionInput} />

    <input type="text"
        placeholder="Enter URL"
        onChange={(e) => setUrlInput(e.target.value)}
        value={urlInput} />

    <button onClick={addPassenger}>Add Passenger</button>

</div>
  );
}

export default MovieForm;