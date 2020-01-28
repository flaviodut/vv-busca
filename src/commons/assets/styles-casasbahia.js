import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components';

WebFont.load({
    google: {
      families: ['Nunito:400,800', 'Ubuntu:400,700', 'Muli:400,700']
    }
  });

export default createGlobalStyle`
  :root {
    --primaryColor: #0061B0;
    --secondaryColor: #0056A4;
    --textColor: #575757;
    --fontFamily: 'Nunito', Arial, sans-serif;
    --fontSize: 1rem;
    --fontLineHeight: 1.5;
    --borderRadius: 4px;
    --buttonSecondaryColor: #0061B0;
    --buttonSecondaryColorHover: #4c90c8;
    --inputBorderColor: #d9d9d9;
  }

  body {
    color: var(--textColor);
    font-family: var(--fontFamily);
    line-height: var(--fontLineHeight);
    padding-top: 68px;
  }

  a,
  a:active {
    color: var(--textColor);
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    color: var(--textColor);
  }

  .form-control {
    border-color: var(--inputBorderColor);

    ::placeholder {
      color: rgba(74, 74, 74, .6);
    }
  }
  
  .form-control-sm {
    font-size: .75rem;
    height: auto;
    padding: .625rem .938rem;
  }
`