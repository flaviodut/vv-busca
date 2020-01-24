import { createGlobalStyle } from 'styled-components'

import PlutoEot from './Pluto.eot'
import PlutoWoff from './Pluto.woff'
import PlutoTtf from './Pluto.ttf'

import PlutoBoldEot from './PlutoBold.eot'
import PlutoBoldWoff from './PlutoBold.woff'
import PlutoBoldTtf from './PlutoBold.ttf'

export default createGlobalStyle`
    @font-face {
      font-family: 'Pluto';
      font-weight: 400;
      font-style: 400;
      src: url(${PlutoEot}) format('eot');
      src: url(${PlutoEot + '?#iefix'}) format('embedded-opentype'),
          url(${PlutoWoff}) format('woff'),
          url(${PlutoTtf}) format('truetype');
    }

    @font-face {
      font-family: 'Pluto';
      font-weight: 700;
      font-style: normal;
      src: url(${PlutoBoldEot}) format('eot');
      src: url(${PlutoBoldEot + '?#iefix'}) format('embedded-opentype'),
          url(${PlutoBoldWoff}) format('woff'),
          url(${PlutoBoldTtf}) format('truetype');
    }
`
