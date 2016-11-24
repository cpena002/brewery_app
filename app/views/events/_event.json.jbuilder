json.extract! event, :id, :name, :start, :end, :brewery_id, :created_at, :updated_at
json.url event_url(event, format: :json)