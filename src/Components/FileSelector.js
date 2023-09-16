// components/FileSelector.js

import { useState } from "react";

// We are passing `pet` and `setPet` as props to `FileSelector` so we can
// set the file we selected to the pet state on the `Form` outer scope
// and keep this component stateless.
const FileSelector = ({ pet, setPet }) => {
  // Read the FileList from the file input component, then
  // set the first File object to the pet state.
  const readFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setPet({ ...pet, file: files[0] });
    }
  };

  return (
    <div className="">
      <label for="fileInput">Image</label>
      {/* Add readFiles as the onChange handler. */}
      <input type="file" onChange={readFiles} />
    </div>
  );
};

export default FileSelector;
