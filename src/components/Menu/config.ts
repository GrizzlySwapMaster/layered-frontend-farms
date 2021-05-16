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
        href: 'https://exchange.pancakeswap.finance/#/swap',
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
        label: 'PooCoin',
        href: '/',
      },
      {
        label: 'CoinHunt',
        href: 'https://coinhunt.cc/coin/548550324',
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
