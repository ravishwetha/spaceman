import React, { useState } from 'react';

import Menu from './views/Menu.jsx';
import Model from './components/Model.jsx';

import './App.css';

const defaultUrl = "https://human.biodigital.com/widget/?be=2yME&ui-info=false&ui-zoom=true&ui-share=false&ui-help=true&initial.button=true&uaid=3yrIJ" //male skeleton

const treeData = [
  {
    key: 'first-level-node-1',
    label: 'Human Basic',
    url: "https://human.biodigital.com/widget/?be=2yME&ui-info=false&ui-zoom=true&ui-share=false&ui-help=true&initial.button=true&uaid=3yrIJ",
  },
  {
    key: 'first-level-node-2',
    label: 'Organ System',
    nodes: [{
      key: 'second-level-node-1',
      label: 'Skeletal System',
      url: "https://human.biodigital.com/widget/?be=2yM0&ui-info=false&ui-zoom=true&ui-share=false&ui-help=true&initial.button=true&uaid=3yqTQ",
      nodes: [
        {
          key: 'third-level-node-1',
          label: 'Axial skeleton',
          nodes: [],
        },
        {
          key: 'third-level-node-2',
          label: 'Appendicular skeleton',
          nodes: [],
        },
      ],
    },
    {
      key: 'second-level-node-2',
      label: 'Cardiovascular system',
      url: "https://human.biodigital.com/widget/?be=2yMB&ui-info=false&ui-zoom=true&ui-share=false&ui-help=true&initial.button=true&uaid=3yr3D",
      nodes: [
        {
          key: 'third-level-node-3',
          label: 'Heart',
          nodes: [],
        },
        {
          key: 'third-level-node-4',
          label: 'Arterial System',
          nodes: [],
        },
        {
          key: 'third-level-node-5',
          label: 'Venous System',
          nodes: [],
        },
      ],
    },
    ]
  },
];

function App() {
  const [label, setLabel] = useState('Welcome');
  const [currentUrl, setUrl] = useState(defaultUrl);

  return (
    <div className="App">
      <Menu data={treeData} onClickItem={({ label, url, ...props }) => {
        setLabel(label)
        if (url && currentUrl !== url) {
          setUrl(url)
        }
      }} />
      <div>{label}</div>
      {currentUrl ? (<Model url={currentUrl} />) : (<div>No Model Loaded for {label}</div>)}
    </div>
  )
}

export default App;
