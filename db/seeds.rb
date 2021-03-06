# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times{
    Business.create!(
        business_name: Faker::Quotes::Shakespeare.king_richard_iii_quote,
        town: Faker::Address.city,
        link:"www.#{Faker::Music.chord}.com",
        username: Faker::Creature::Cat.name,
        password: "a",
        password_confirmation: "a"
        )
    }
    
    15.times{
        Job.create!(
            position: Faker::Games::HalfLife.enemy,
            hours: Faker::Address.zip_code,
            rate: rand(25.00),
            phone: 2129891540,
            email: "#{Faker::Creature::Cat.name}@#{Faker::Music.chord}.com",
            business_id: rand(40..44),
    )
}

puts "now go away or I shall taunt you a second time"