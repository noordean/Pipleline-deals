require "rails_helper"

RSpec.describe DealsController, type: :controller do
  describe "index" do
    expected_response = { entries: [{ value: "92853.1", deal_stage: { id: 727378, percent: 10, name: "Qualified" } }] }

    before do
      stub_request(:get, /api.pipelinedeals.com/).
        with(headers: {'Accept'=>'*/*', 'User-Agent'=>'Ruby'}).
        to_return(status: 200, body: expected_response.to_json)
    end

    it "fetches deals from pipelinedeals and assign to body" do
      get :index
      expect(assigns(:body)).to eq(expected_response.with_indifferent_access)
    end
  end
end
