import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './customize.css'; 

// Change CustomizePage name to SetPreferences

const CustomizePage = () => {
  const navigate = useNavigate();
  const [colorMode, setColorMode] = useState('color');
  const [copyCount, setCopyCount] = useState(1);
  const [singleSided, setSingleSided] = useState(false);
  const [doubleSided, setDoubleSided] = useState(false);

  const handlePrint = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Implement logic to generate token number, file name, and
    // print instructions based on user selections.

    // For example:
    const tokenNumber = Math.floor(Math.random() * 1000); // Generate a random token number
    const fileName = "YourFileName.pdf"; // Replace with the actual file name
    const printInstructions = {
      colorMode, // Use the selected color mode
      copyCount, // Use the selected copy count
      singleSided, // Use the selected single-sided option
      doubleSided, // Use the selected double-sided option
    };

    // Redirect back to the first page after processing
    navigate('/');

    // You can display the token number, file name, and instructions
    // to the user or perform any other actions here.
    console.log('Token Number:', tokenNumber);
    console.log('File Name:', fileName);
    console.log('Printing Instructions:', printInstructions);
  };

  return (
    <Layout>
      <h1>Customize Your Print Job</h1>
      <div className="customize-page"> {/* Apply the 'customize-page' class here */}
        
        <form onSubmit={handlePrint}> {/* Wrap your content in a <form> */}
          <div className='file-editing-components'>
            {/* Your form elements go here */}
            <div className="radio-container">
              <label>
                <p>Selected Color Mode:</p>
                <input
                  type="radio"
                  name="colorMode"
                  value="color"
                  checked={colorMode === 'color'}
                  onChange={() => setColorMode('color')}
                />{' '}
                Color
              </label>
              <label>
                <input
                  type="radio"
                  name="colorMode"
                  value="blackAndWhite"
                  checked={colorMode === 'blackAndWhite'}
                  onChange={() => setColorMode('blackAndWhite')}
                />{' '}
                B&W
              </label>
            </div>

            <div>
              <label>
                Copy Count:
                <input
                  type="number"
                  value={copyCount}
                  onChange={(e) => setCopyCount(parseInt(e.target.value, 10))}
                />
              </label>
            </div>

            <div>
              <label>
                Single Sided:
                <input
                  type="checkbox"
                  checked={singleSided}
                  onChange={() => setSingleSided(!singleSided)}
                />
              </label>
            </div>

            <div>
              <label>
                Double Sided:
                <input
                  type="checkbox"
                  checked={doubleSided}
                  onChange={() => setDoubleSided(!doubleSided)}
                  disabled={singleSided} // Disable when "Single Sided" is checked
                />
              </label>
            </div>

            <button type="submit">Print</button> {/* Use type="submit" for the button */}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CustomizePage;