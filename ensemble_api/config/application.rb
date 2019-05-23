require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EnsembleApi
  class Application < Rails::Application

    config.load_defaults 5.2

    config.generators.system_tests = nil

    config.generators do |g|
      g.helper = false
      g.assets = false
    end

    config.middleware.insert_before(0, Rack::Cors) do
      allow do
      
        origins("127.0.0.1:5500", "localhost:3300")

        resource(
          "/api/*",
          headers: :any,
          credentials: true,
          methods: [:get, :post, :delete, :patch, :put, :option]
        )
      end
    end
  end
end
