json.extract! brewery, :id, :name, :description, :address, :latitude, :longitude, :created_at, :updated_at
json.url brewery_url(brewery, format: :json)