# frozen_string_literal = true
class CurrencyRateService
  class << self
    def run
      uri = URI('https://api.exmo.com/v1.1/ticker')
      result = Net::HTTP.get(uri)
      parsed_data = JSON.parse(result)
      usd_rub_pair_data = parsed_data['USD_RUB']
      CurrencyRate.create!({
        buy: usd_rub_pair_data['buy_price'],
        pair: 'USD/RUB',
        sell: usd_rub_pair_data['sell_price'],
        ticker: usd_rub_pair_data['updated'],
      })
    end

    def broadcast
      currency_rate_props = {
        currencyRate: CurrencyRate.current.slice(:buy, :pair, :sell, :ticker),
      }
      ActionCable.server.broadcast 'ticker_channel', currency_rate_props
    end

    def set_forced(pair:, buy:, sell:, expired_at:)
      ticker = Time.parse(expired_at).to_i
      CurrencyRate.where(pair: 'USD/RUB', forced: true).delete_all
      CurrencyRate.create!({
        buy: buy,
        forced: true,
        pair: pair,
        sell: sell,
        ticker: ticker,
      })
    end
  end
end