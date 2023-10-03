import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.js';
import './home.css';    // Import the CSS file


// FileUploadPage to uploadFile


const FileUploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFiles.length > 0) {
      // If files are selected, automatically navigate to the Customize page
      navigate('/customize');
    }
  }, [selectedFiles, navigate]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <Layout>
      <div>
        <h1 className='header-line'>Get your Files printed Securely and Conveniently</h1>
        <div className='file-editing-components'>
          <div>
            <label className="file-input-label">
              <input type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
              <div className='center rectangle-box'>Select your files</div>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FileUploadPage;
