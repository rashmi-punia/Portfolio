import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './Context.jsx'
import {BrowserRouter} from "react-router-dom"

// import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import { GlobalWorkerOptions } from 'pdfjs-dist';

// // Set the workerSrc property
// GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <BrowserRouter>
  <GlobalState>

    <App />
  </GlobalState>

  </BrowserRouter>
  </React.StrictMode>,
)
