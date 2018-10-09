# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

i = 1
(10).times do
  lat = rand(37.694191...37.791612)
  lng = rand(-122.494894...-122.412040)
  Bench.create(description: "bench ##{i}", lat: lat, lng: lng)
  i += 1
end
