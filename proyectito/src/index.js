import React from 'react';
import ReactDom from 'react-dom/client';
import Describir from './Describir';

const rootElement = ReactDom.createRoot(document.getElementById('root'));
const root = ReactDom.createRoot(rootElement);

root.render(
    <Describir/>
)