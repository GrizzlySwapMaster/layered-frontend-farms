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
    label: 'Layered 1 Hunter Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Layered 2 Prey Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Layer 1 (GRZX)',
        href: 'https://layer.grizzlyswap.com',
      },
      {
        label: 'Layer 2 (BEAR2)',
        href: 'https://layer2.grizzlyswap.com'
      },
    ],
  },

  {
    label: "Grizzly Home (GRZ)",
    icon: 'FarmIcon',
    href: 'https://grizzlyswap.com',
  },
  {
    label: 'Partnership (Cross Farm)',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'EagelSwap',
        href: 'https://www.eagleswapdefi.com/',
      }
    ],
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
      },
      {
        label: 'VFAT',
        href: 'https://vfat.tools/bsc/grizzly/',
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
        href: 'https://poocoin.app/tokens/0xB04BbfB6207a1bacfF4Ff62C34d6891B8BB3d18b',
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
