import React, { useState } from 'react';

import './home.css';
import Layout from '../components/Layout/Layout';

const Home = () => {
 
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [colorMode, setColorMode] = useState('blackAndWhite');
  const [copyCount, setCopyCount] = useState(1);
  const [doubleSided, setDoubleSided] = useState(false);
  const [singleSided, setSingleSided] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setFileUploaded(true);
  };

  const handleColorModeChange = (e) => {
    setColorMode(e.target.value);
  };

  const handleCopyCountChange = (e) => {
    setCopyCount(parseInt(e.target.value, 10));
  };

  const handleDoubleSidedChange = (e) => {
    setDoubleSided(e.target.checked);
  };

  const handleSingleSidedChange = (e) => {
    const singleSidedValue = e.target.checked;
    setSingleSided(singleSidedValue);

    // If "Single Sided" is checked, disable "Double Sided"
    if (singleSidedValue) {
      setDoubleSided(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to print the selected files here
    console.log('Selected Files:', selectedFiles);
    console.log('Color Mode:', colorMode);
    console.log('Copy Count:', copyCount);
    console.log('Single Sided:', singleSided);
    console.log('Double Sided:', doubleSided);
  };

  return (
    <div>
      <h1 className='header-line'>Get your Files printed Securely and Conveniently</h1>
      <div className='file-editing-components'>
        {fileUploaded ? (
          <div>
            <h2>Print Options</h2>
            <form onSubmit={handleSubmit}>
              <div className="radio-container">
                <label>
                  {/* Display the selected color mode */}
            <p>Selected Color Mode: {colorMode}</p>
                  <input
                    type="radio"
                    name="colorMode"
                    value="color"
                    checked={colorMode === 'color'}
                    onChange={handleColorModeChange}
                  />{' '}
                  Color
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorMode"
                    value="blackAndWhite"
                    checked={colorMode === 'blackAndWhite'}
                    onChange={handleColorModeChange}
                  />{' '}
                  Black & White
                </label>
              </div>
              <br />
              Copy Count:
              <input type="number" value={copyCount} onChange={handleCopyCountChange} />
              <div>
                <label>
                  Single Sided:
                  <input
                    type="checkbox"
                    checked={singleSided}
                    onChange={handleSingleSidedChange}
                  />
                </label>
                <label>
                  Double Sided:
                  <input
                    type="checkbox"
                    checked={doubleSided}
                    onChange={handleDoubleSidedChange}
                    disabled={singleSided} // Disable when "Single Sided" is checked
                  />
                </label>
              </div>
              <button type="submit">Print</button>
            </form>
            
          </div>
        ) : (
          <div>
            <label className="file-input-label">
              <input type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
              <div className='center rectangle-box'>Select your files</div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;