import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://layer.grizzlyswap.com',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xB04BbfB6207a1bacfF4Ff62C34d6891B8BB3d18b',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Layered Hunter Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Layered Prey Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: "GRIZZLY HOME (GRZ)",
    icon: 'FarmIcon',
    href: 'https://grizzlyswap.com',
  },
  {
    label: 'Emission Reduction Mechanism',
    icon: 'GroupsIcon',
    href: 'https://grizzlyswap.gitbook.io/grizzly-swap/emission-mechanism/automatic-emission-reduction',
  },
  {
    label: 'Anti-Whale Mechanism',
    icon: 'GroupsIcon',
    href: '/',
  },
  {
    label: 'RoadMap',
    icon: 'RoadmapIcon',
    href: 'https://grizzlyswap.gitbook.io/grizzly-swap/road-map',
  },
  {
    label: 'Listing',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Dappradar',
        href: 'https://dappradar.com/binance-smart-chain/defi/grizzly-swap',
      }
    ],
  },
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0x78272d2c10ce553ab4de9b39156bb49ef45330c8',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0xb04bbfb6207a1bacff4ff62c34d6891b8bb3d18b',
      },
    ],
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/GrizzlySwap',
      },
      {
        label: 'Docs',
        href: 'https://grizzlyswap.medium.com/',
      },
      {
        label: 'Blog',
        href: 'https://grizzlyswap.gitbook.io/grizzly-swap/'
      },
    ],
  },
]

export default config
