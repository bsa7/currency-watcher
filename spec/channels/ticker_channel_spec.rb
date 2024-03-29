# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TickerChannel, type: :channel do
  it 'successfully subscribes' do
    subscribe
    expect(subscription).to be_confirmed
  end
end
