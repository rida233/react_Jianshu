import { createGlobalStyle } from 'styled-components';

export const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1563967881499'); /* IE9 */
  src: url('./iconfont.eot?t=1563967881499#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAakAAsAAAAADCQAAAZWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqKdIkFATYCJAMcCxAABCAFhG0HYBtdClGULlKe7KMkp0GSJMVv/uD/0f/hZv2ZSSCdBNoekrZrrKkjKwY0odRfSsuup7sOd45V1sXoucND/u3dv1tLta1AEmhBFgUSRxhwJFnS/xxLvUyw/HbXLtW1bhrujRJoQBFtSaPC2SY2IB1NQTybgc7NqwECQNXUDBoHDLMChxEYETpsXo8TuJYLM8NEOKtm5MgCdAGLa8vwNQD4JP959EOb4AAwNiG41qilfyb0+qDqM6ImVJNSBXV7AQDQjgMgAJoBYAA6R0MqUpaaIajzOxlWAHocTPNBXIiL8ebxDlWfJRKgPTSYi+hDpeQg1v7Lw2AB6kA2CcCOK2tAHGI+QCAu8AEBcZEPMIg3V7HmDggA4x6r0QtYAABaHKEHUB2gBwAPEFDaMeAQzeRHC7VqmQWskUI4zsSnpaQI0UMZOb0+3YBR7Woz6MOHjgcP7IGQGubv37fdu2dFpZFAyIh10WhhEIYVk71ADQejIhEIA68pKOVUaJb95JrqXt/gw562sNg06lpBtSVzzrBqB1MneetPjRityBoK80HREY1eJ9PRPZnaBSvN4cdPiNSklWnjnEf5IABF9BQN3EClDkcpDXSz7dsE6mY+eBYhd3g9xYEGjVZyuAHA9vQlVJNHv+9WdWb57fbJB+/WYlfcmRzbRPWBLYgt3conBzenTzoFhy643v55+sCODLT24UDd+fu1Qd0mK+Kghk3J0aiIzt+B0kAEoejGcH0+KorR9SYIhew8Co1dzNwgEDGj0mgwDKCGjI4AjUSirTsgFUL9aGBDudlcKlYcbcgHTes3mwBCxjCxzq6atoMI7iWiSMRMA8YQ2MJuoyIhtq0Qr8x5omVGa8hUo2xbvX4hY1nsUIMBkY7Bcwk/h7FldKOpfzgaNUfEiq0NB0YrzDUjFWIHVfOp24m6zLmEZjPH/vj/JCMkxISwmXn4Aq9Hs4OncppeFBJpP/Bm867/0xLFg13XoTnBkznNLgk9/fdwiDzdjQ86u824jGaun//vJLvre5wFutx027Z5zfzQNytv3qwkFSQ1EFWOM1WQfiXN/ti2vdVmf/mlgnl482Y8L5TDPo9ADgNR5egCiaoYuXKFJPoYFBhS161bgvfvx9AvkRXQyWfoCGPnl+UQeusN0mDL00hqqvKF2ndqbZ+/CU7JA2836ndb0idcfR9k9xhpw31c3h4PmX96FPnOd2qJ2N4tChrbvbrJ/NBeXd5Ncfiuppv+yaj/U/2a8OKIP23J7JjfmDD6x0pL+efic36pVfIbfzB6zp2XV8d4mY+tlnfnnbVX2Gtm2RwX2Hltrgv0Wxeu889NL2HVlCK+4s5WGzTCqbbqP5S7kv7qqVw4UThLt6kphduSriSJo1xnuDLORR0veyun1tfxO6hLW3awzqq2awRFWJPELdUw2rLkMi3hYtNOA27OmTVj+ub/AWx0H6akHvk5g2Vxq/qFCtOq972eWi59ent3k/UtUKqjl6ILt0nF+OCuEn24Lz5G4FhMaa6lKzoFY/VGrTu/6aP0VXvGT/BnNTnuvbL24c/d6ySgzrF76ZjJtoXblOrrKgd+2vBUxaHXM6ddmCRiXPdI7arVqzKOdxs8E+YCAEicIcdId3n9R2Q7MQIAkBV/aRcSeYoA2HHyEcmoHM58Mup3thV81ndvMzW5228c/9db8HiKa5mUSBwu4EzwYzEDrf5VqckpjKsN3NqyR49VZETr7Ge1gAHQcBbAbyn2gRfbs5ho9Q/XYqoB06oBBKceksE2AxavHWhwegLV1MDjeQYKAlUSADSxSACSYidgeieBSHEdyWCfA8vsO9BICQKUPQxn5DUIL+2rSE6flGlxzbB43QX5cuT10aLjGMlTnOtUmtqcZZeUIm/W0rpFq251oJQvKdvYp6jE08bnky2yUpBnGSCuJ+XmFlgKlYJsye1rkeXzFXZp2VIeu0cLd0EeUH0pJE4+kkwWLjNSWS+3Avnk+X1o7/vHkHgUy+WkzIzoyNpJFEW8q7dorYVWBHKgKZ8a8Vi6Fynh0YZPKsgsZK19gTwWA6SAJDcsFbAoHN8sm8TNp4WsNQqFumgpzSSzphb7t+Q9zisAoIK7awMjghjEIg3SIg60e1axc7o3n8rOfE+mM9ubMujMLIIzv0nKx72dmtvTs3lzxuXN9gIAAAA=') format('woff2'),
  url('./iconfont.woff?t=1563967881499') format('woff'),
  url('./iconfont.ttf?t=1563967881499') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1563967881499#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconshuaxin:before {
  content: "\e600";
}

.iconfangdajing:before {
  content: "\e617";
}

.iconzhinanzhen:before {
  content: "\e60c";
}

.iconAa:before {
  content: "\e636";
}

.iconicon--:before {
  content: "\e791";
}

.iconbiji:before {
  content: "\e62d";
}

`