import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon';
import "./global.css"
import { SuperSEO } from "react-super-seo";

document.title = "Facturation des vignettes";

// var link = document.querySelector("link[rel~='icon']");
// if (!link) {
//     link = document.createElement('link');
//     link.rel = 'icon';
//     document.getElementsByTagName('head')[0].appendChild(link);
// }
// link.href = 'https://res.cloudinary.com/dupagadir/image/upload/v1651410941/frame-3_anscx7.ico';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SuperSEO
        title="vignette (SNTL) Application de gestion | vapp"
        description="Un moyen simple de gérer le service de vignettes de vos stations  et de le transformer en fonction des dernières règles de SNTL"
        lang="fr"
        openGraph={{
          ogImage: {
            ogImage: 'https://res.cloudinary.com/dupagadir/image/upload/s--UO20D7YC--/v1658099879/ajoute_un_Bon_dypcmh.webp',
            ogImageAlt: 'Facturation des vignettes',
            ogImageWidth: 1025,
            ogImageHeight: 550,
            ogImageType: 'image/webp',
          },
        }}
        viewport={"width=device-width, initial-scale=1"}
        charset={"UTF-8"}
        googlebot={"index"}
      />
    <App />
    <Favicon url="https://kmoz.dev/favicon.ico"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
