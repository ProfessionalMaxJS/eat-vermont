# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

biz_types = { 1 => "farm", 2 => "restaurant"}

5.times{
    Business.create!(
        business_name: Faker::Quotes::Shakespeare.king_richard_iii_quote,
        address: Faker::Address.street_address,
        phone: 2129891540,
        website:"www.#{Faker::Music.chord}.com",
        business_type: biz_types[rand(2)],
        user_name: Faker::Creature::Cat.name,
        email_address: "#{Faker::Creature::Cat.name}@#{Faker::Music.chord}.com",
    )
}

15.times{
    Job.create!(
        position: Faker::Games::HalfLife.enemy,
        hours: Faker::Address.zip_code,
        pay: rand(25.00),
        email: "#{Faker::Creature::Cat.name}@#{Faker::Music.chord}.com",
        phone: 2027744551,
        point_person: Faker::Games::HalfLife.enemy,
        business_id: rand(11..15),

    )
}

puts "now go away or I shall taunt you a second time"