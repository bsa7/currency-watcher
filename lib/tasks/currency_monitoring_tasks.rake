# frozen_string_literal: true
require 'colorize'

namespace :currency_monitoring do
  desc 'Fetch current currency rate.'
  task fetch_currency_rate: :environment do
    require 'net/http'
    uri = URI('https://api.exmo.com/v1.1/ticker')
    result = Net::HTTP.get(uri)
    parsed_data = JSON.parse(result)
    usd_rub_pair_data = parsed_data['USD_RUB']

    CurrencyRate.create!({
      pair: 'USD/RUB',
      buy: usd_rub_pair_data['buy_price'],
      sell: usd_rub_pair_data['sell_price'],
      ticker: usd_rub_pair_data['updated'],
    })
  end
end