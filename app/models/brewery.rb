class Brewery < ActiveRecord::Base
  has_many :beers
  has_many :events
  geocoded_by :address
  after_validation :geocode
end
