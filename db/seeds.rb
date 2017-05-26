# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# guest_user = User.create(
#   username: "CaptainJaneway",
#   password: "password",
#   user_img_url: 'http://members.tripod.com/~Neelix_4/janeway1.jpg',
#   user_site_url: 'http://memory-alpha.wikia.com/wiki/Kathryn_Janeway'
#   )

  User.destroy_all
  Photo.destroy_all
  Follow.destroy_all

  User.create(
    username: "captainjaneway",
    password: "password",
    user_img_url: 'http://memory-alpha.wikia.com/wiki/Kathryn_Janeway',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Kathryn_Janeway'
  )
