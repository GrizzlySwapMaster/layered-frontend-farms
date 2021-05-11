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
          GrizzlySwap Contract Address
        </Heading>
        <ul>
          <Row><li> Contract Address: <a href="https://bscscan.com/block/countdown/7133000">Block 7133000</a> </li></Row>
          <Row><li> MasterChef: <a href="https://bscscan.com/block/countdown/7133000">Block 7133000</a></li></Row>
          <Row><li> TimeLock:  <a href="https://bscscan.com/block/countdown/7133000">Block 7133000</a></li></Row>
          </ul>
      </CardBody>
    </StyledContractAddress>
  )
}

export default ContractAddress
