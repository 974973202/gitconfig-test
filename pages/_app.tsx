import '../styles/globals.css'; // 基础css
import 'bytemd/dist/index.min.css'; // 高亮css
import 'juejin-markdown-themes/dist/channing-cyan.min.css';
// import 'juejin-markdown-themes/dist/juejin.min.css'
// import 'juejin-markdown-themes/dist/arknights.css'
// import 'juejin-markdown-themes/dist/awesome-green.css'
// import 'juejin-markdown-themes/dist/Chinese-red.css'
// import 'juejin-markdown-themes/dist/fancy.css'
// import 'juejin-markdown-themes/dist/geek-black.css'
// import 'juejin-markdown-themes/dist/healer-readable.css'
import 'highlight.js/styles/vs.css';
import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
