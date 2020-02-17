import WebFont from 'webfontloader'
import { createGlobalStyle } from 'styled-components';

WebFont.load({
    google: {
      families: ['Muli:400,700']
    }
  });

export default createGlobalStyle`
  :root {
    --primaryColor: #C11926;
    --secondaryColor: #A61722;
    
    --fontFamily: 'Muli', Arial, sans-serif;
    --fontSize: 1rem;
    --fontLineHeight: 1.5;
    
    --textColor: #575757;
    --titleColor: #138990;
    --priceColor: #138990;
    --outOfStockColor: #575757;
    
    --borderRadius: 4px;

    --discountFlagBackgroundColor: #EB1D29;
    
    --inputBorderColor: #d9d9d9;
    --buttonPrimaryColor: #EB1D29;
    --buttonPrimaryColorHover: #EB1D29;
    --buttonSecondaryColor: #48BAC7;
    --buttonSecondaryColorHover: #48BAC7;

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