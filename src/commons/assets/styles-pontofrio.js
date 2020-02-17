import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components';

WebFont.load({
    google: {
      families: ['Ubuntu:400,700']
    }
  });

export default createGlobalStyle`
  :root {
    --primaryColor: #BC0406;
    --secondaryColor: #FFC600;
    
    --fontFamily: 'Ubuntu', Arial, sans-serif;
    --fontSize: 1rem;
    --fontLineHeight: 1.5;
    
    --textColor: #575757;
    --titleColor: #BC0406;
    --priceColor: #BC0406;
    --outOfStockColor: #BC0406;
    
    --borderRadius: 4px;

    --discountFlagBackgroundColor: #FD4615;
    
    --inputBorderColor: #d9d9d9;
    --buttonPrimaryColor: #BC0406;
    --buttonPrimaryColorHover: #BC0406;
    --buttonSecondaryColor: #2D2A26;
    --buttonSecondaryColorHover: #2D2A26;

    --ratingSize: 10px;
    --ratingOn: #FEDC37;
    --ratingOff: #BFBFBF;
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

  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1230px;
    }
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