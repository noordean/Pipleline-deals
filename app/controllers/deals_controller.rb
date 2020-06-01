class DealsController < ApplicationController
  def index
    response = HTTParty.get(
      "https://api.pipelinedeals.com/api/v3/deals.json?api_key=#{ENV['API_KEY']}"
    )
    @body = JSON.parse(response.body)
  end
end
