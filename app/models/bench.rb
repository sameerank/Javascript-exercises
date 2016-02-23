class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true

  def self.in_bounds(bounds)
    lat_lng_array = bounds.values
    lat_range = lat_lng_array.map { |v| v["lat"].to_f }.sort
    lng_range = lat_lng_array.map { |v| v["lng"].to_f }.sort
    Bench.all.select { |bench| bench.lat.between?(*lat_range) &&
      bench.lng.between?(*lng_range)}
  end
end
