import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </div>
  );
}

export default FileUpload;
