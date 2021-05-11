import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledContractAddress = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: left;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
`

// toChange

const ContractAddress = () => {
  const TranslateString = useI18n()

  return (
    <StyledContractAddress>
      <CardBody>
        <Heading color="white" size="xl" mb="24px">
          Information and Rules
        </Heading>
        <ul>
          <li> Audited by TechRate </li>
          <li> Buyback and Burn Mechanism </li>
          <li> Automatic Emission Reduction  </li>
          <li> Initital Liquidity Will Be Burned </li>
          <li> 1/4 of the desposit fees used for buybacks </li>
          <li> Migrator Code Removed </li>
          <li> HIGH RISK. Understand the Risks! </li>
        </ul>
      </CardBody>
    </StyledContractAddress>
  )
}

export default ContractAddress
