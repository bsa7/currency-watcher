require_relative 'boot'
require 'rails/all'
require 'rspec-rails'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CurrencyMonitor
  class Application < Rails::Application
    require 'dotenv'
    Dotenv.load('config/.env.local')
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.action_cable.allowed_request_origins = [/http:\/\/*/, /https:\/\/*/]
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
