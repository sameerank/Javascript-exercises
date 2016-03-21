json.array! @benches do |bench|
  json.id bench.id
  json.lat bench.lat
  json.lng bench.lng
  json.description bench.description
end
