import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledRules = styled(Card)`
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

const Rules = () => {
  const TranslateString = useI18n()

  return (
    <StyledRules>
      <CardBody>
        <Heading color="white" size="xl" mb="24px">
          Features and Information
        </Heading>
        <Row>
        #1 DECISION: NO BOT. CONTRACT ADDRESS TO BE RELEASED DURING STEALTH LAUNCH
        </Row>
        <Row>
        #2 LOW EMISSION RATE
        </Row>
        <Row>
        #3 BUYBACK AND BURNED AT EVERY 100,000 TVL ($500-$1,000)
        </Row>
        <Row>
        #4 LIQUIDITY WILL BE LOCKED
        </Row>
        <Row>
        #5 MIGRATOR CODE REMOVED
        </Row>
        <Row>
        #6 HIGH RISK. Understand the Risk
        </Row>
      </CardBody>
    </StyledRules>
  )
}

export default Rules
