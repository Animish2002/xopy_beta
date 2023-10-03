import React from 'react'
import Layout from '../../components/Layout/Layout';
//import './printstatus.css';


const FilesBeingPrintedpage = () => {
  return (
   <Layout>
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
  <div className="printerWrapper">
    <div className="paperWrapper">
      <div className="paperIn page1">Printing...</div>
      <div className="paperIn page2">Printing...</div>
      <div className="paperInsert" />
      <div className="paperSlot" />
      <div className="paperHide" />    
    </div>
    <div className="printerTop" />
    <div className="printerBody" />
    <div className="bayWrapper">
      <div className="lightLarge">
        <div className="light">
        </div>
      </div>
      <div className="lightSmall">
        <div className="light">
        </div>
      </div>
      <div className="facePlate" />
      <div className="bayOpening" />
      <div className="bayTray" />
      <div className="paperOut" />
      <div className="paperOutShadow" />
    </div>
  </div>
   </Layout>
  )
}

export default FilesBeingPrintedpage;