import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/home',
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
    label: 'Hunter Farms (V2 LP)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Prey Staking (V2)',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: "Layered Farming (23RD MAY)",
    icon: 'FarmIcon',
    href: '/',
  },

  {
    label: 'TechRate Audit (Pending)',
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
        href: 'https://poocoin.app/tokens/0xdf5a096d33de84b11041a7ff78e7008c328184ab',
      }
    ],
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '/',
      },
      {
        label: 'Docs',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/'
      },
    ],
  },
]

export default config
