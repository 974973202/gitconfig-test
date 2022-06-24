import React, { useState } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { Editor, Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];

const Home: NextPage = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <Editor
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
      />
      <Viewer value={value} plugins={plugins} />
    </div>
  );
};

export default Home;
