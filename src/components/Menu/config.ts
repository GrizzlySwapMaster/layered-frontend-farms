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
    label: 'HUNTER FARMS (V2 LP)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'PREY STAKING (V2)',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'LAYERED FARMING (23 MAY)',
    icon: 'FarmIcon',
    href: '/pools',
  },

  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Emission Reduction Mechanism',
    icon: 'GroupsIcon',
    href: '/',
  },
  {
    label: 'RoadMap',
    icon: 'RoadmapIcon',
    href: '/',
  },
  {
    label: 'Listing (Pending)',
    icon: 'IfoIcon',
    href: '/',
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
        label: 'DexGuru',
        href: '/',
      },
      {
        label: 'DexTools',
        href: '/'
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
