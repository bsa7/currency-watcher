# frozen_string_literal = true
require 'rails_helper'
RSpec.describe WatcherController, type: :controller do
  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}
      expect(response).to be_successful
    end

    it 'response contains the currency rate' do

    end
  end
end
