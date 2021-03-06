import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components';

WebFont.load({
    google: {
      families: ['Nunito:400,800']
    }
  });

export default createGlobalStyle`
  :root {
    --primaryColor: #0061B0;
    --secondaryColor: #0056A4;

    --fontFamily: 'Nunito', Arial, sans-serif;
    --fontSize: 1rem;
    --fontLineHeight: 1.5;
    
    --textColor: #575757;
    --titleColor: #0061B0;
    --priceColor: #0061B0;
    --outOfStockColor: #0061B0;

    --borderRadius: 4px;

    --discountFlagBackgroundColor: #FFB259;

    --inputBorderColor: #d9d9d9;
    --buttonPrimaryColor: #31B348;
    --buttonPrimaryColorHover: #31B348;
    --buttonSecondaryColor: #0061B0;
    --buttonSecondaryColorHover: #4c90c8;

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