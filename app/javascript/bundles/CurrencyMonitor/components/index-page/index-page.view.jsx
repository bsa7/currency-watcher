import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { subscribeToChannel, unsubscribeFromChannel } from '../../../../channels/ticker_channel'
import { Container, Footer, Header, Column, Root, Row } from '../../shared/styled-components'

const CurrencyMonitor = ({ currencyRate, updateTicker }) => {
  const [subscribed, subscribe] = useState(undefined)
  useEffect(() => {
    if (!subscribed) {
      const subscription = subscribeToChannel(updateTicker)
      subscribe(true)
      return () => unsubscribeFromChannel(subscription)
    }
  }, [])
  const {
    buy,
    forced,
    pair,
    sell,
    ticker,
  } = currencyRate
  const currentTime = new Date(ticker * 1000)
  const at = forced ? 'till' : 'at'

  return (
    <Root id="index-page">
      <Column>
        <Header id="header">
          <h2>Currency rate monitor</h2>
        </Header>
        <Container id="body">
          <Column>
            <Row>
              <h3>
                {at} {currentTime.toString()}
              </h3>
            </Row>
            <Row>
              <span id="pair">{pair}</span>.
              Buy: <span id="buy-price">{buy}</span>,
              Sell: <span id="sell-price">{sell}</span>
            </Row>
          </Column>
        </Container>
        <Footer id="footer">
          The footer, (c) 2020&nbsp;
          <Link to="/admin">Admin page</Link>
        </Footer>
      </Column>
    </Root>
  )
}

CurrencyMonitor.propTypes = {
  currencyRate: PropTypes.shape({
    pair: PropTypes.string.isRequired,
    forced: PropTypes.bool,
    buy: PropTypes.string.isRequired,
    sell: PropTypes.string.isRequired,
    ticker: PropTypes.number.isRequired,
  }),
}

export default CurrencyMonitor
