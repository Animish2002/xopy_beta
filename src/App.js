import React from "react";
import {  Route, Routes } from "react-router-dom";
import FileUploadPage from "./pages/User/FileUploadPage";       // Import the FileUpload Component
import CustomizePage from "./pages/User/CustomizePage";       // Import the CustomizePage component
import PageNotFound from "./pages/User/PageNotFound";
import "./App.css";
import OperatorPanel from "./pages/Operator/OperatorPanel";
import FilesBeingPrintedpage from "./pages/User/FilesBeingPrintedpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FileUploadPage />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/printstatus" element={<FilesBeingPrintedpage/>} />
        <Route path="/operatorpanel" element={<OperatorPanel />} />
      </Routes>
    </>
  );
}

export default App;
