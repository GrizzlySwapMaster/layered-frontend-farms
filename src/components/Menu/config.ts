import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Wall Rose',
    icon: 'FarmIcon',
    href: '/rose',
  },
  {
    label: 'Wall Maria',
    icon: 'PoolIcon',
    href: '/maria',
  },
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Layer1',
        href: 'https://layer1.aotfinance.com',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/titandefi',
      },
      {
        label: 'Docs',
        href: 'https://titandefi.gitbook.io/titan-finance/',
      },
      {
        label: 'Blog',
        href: 'https://titandefi.medium.com/rise-of-the-titan-5057e7cc3a3d'
      },
    ],
  },
]

export default config
