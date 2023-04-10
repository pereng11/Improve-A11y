import { css } from "@emotion/react";

export const globalStyles = css`
  /* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"); */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input,
  textarea,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    /* font-family: "Noto Sans KR", "sans-serif"; */
  }
  html {
    font-size: 62.5%;
    body {
      font-size: 1.6rem;
    }
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    &:active,
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: inherit;
    font: inherit;
    color: inherit;
  }
  input {
  }
`;

export const naverStyles = css`
  :root,
  ::after,
  ::before {
    -webkit-locale: "ko";
    --color-webtoon-green: #00dc64;
    --color-webtoon-dim-green: #00c855;
    --color-text-primary: #000;
    --color-text-addition: #666;
    --color-text-read: #b2b2b2;
    --color-text-describe: #999;
    --color-text-subtitle: #555;
    --color-text-minor: #7f7f7f;
    --color-text-secondary: #444;
    --color-text-white: #fff;
    --color-text-title: #fff;
    --color-text-highlight: #ff4747;
    --color-text-dislike: #286af6;
    --color-text-etc: #c4c4c4;
    --color-bg-primary: #fff;
    --color-bg-secondary: #f6f6f6;
    --color-bg-weekday: #ccf8e0;
    --color-bg-dim-banner: rgba(0, 0, 0, 0.4);
    --color-bg-dim-thumbnail: rgba(0, 0, 0, 0.6);
    --color-bg-item: #f1f2f3;
    --color-bg-etc: #ededed;
    --color-bg-tag: #ebebeb;
    --color-bg-button-negative: #e0e0e0;
    --color-line-primary: #e0e0e0;
    --color-line-secondary: #ebebeb;
    --color-line-list-thumbnail: rgba(0, 0, 0, 0.06);
    --color-line-minor: #d3d3d3;
    --color-line-rank-thumbnail: rgba(0, 0, 0, 0.1);
    --color-line-button-02: #fff;
    --color-line-popup: #c4c4c4;
    --color-solid-highlight: rgba(0, 220, 100, 0.2);
    --color-solid-badge: #ff4747;
    --color-solid-popup-dim: rgba(0, 0, 0, 0.7);
    --color-solid-promotion-bar: #e5fbef;
    --color-solid-board: #fffdf1;
    --color-solid-board-select: #f3f5f8;
    --color-solid-placeholder: rgba(178, 178, 178, 0.15);
    --color-grey600: #999;
  }

  *:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: 2px;
  }

  button {
    border: 0;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;
