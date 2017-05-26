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
  #
  User.create(
    username: "CaptainJaneway",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765991/zsbic43zqsac14hi0u9h.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Kathryn_Janeway'
  )
  User.create(
    username: "Chakotay",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765941/uclqed6kvqjhtbbvdqzv.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Chakotay'
  )
  User.create(
    username: "deepspace9",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765953/bfctc5kezu09q2dejn8f.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Deep_Space_9'
  )
  User.create(
    username: "singularity",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765960/qtg69wkeiwyrijhg2mho.jpg',
    user_site_url: 'https://en.wikipedia.org/wiki/Technological_singularity'
  )
  User.create(
    username: "uss_voyager",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765997/ilgxpauadjqfx8obyjxx.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/USS_Voyager'
  )
  User.create(
    username: "jlpicard",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765982/wufoy8ignpzzelv93pl9.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Jean-Luc_Picard'
  )
  User.create(
    username: "deography",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765936/oqscpaeda9jqd8oqi3a1.jpg',
    user_site_url: 'http://deography.com/starscape/'
  )
  User.create(
    username: "nasa",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765975/xxgb8ki8or5abanm6xz6.jpg',
    user_site_url: 'https://apod.nasa.gov/apod/archivepix.html'
  )
  User.create(
    username: "cassini",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765946/n52okgrfdewtl7dodtdw.jpg',
    user_site_url: 'https://saturn.jpl.nasa.gov/'
  )
  User.create(
    username: "caltech",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495676237/nbatb1oxqwl4gmll8jke.jpg',
    user_site_url: 'http://www.astro.caltech.edu/'
  )
  User.create(
    username: "jpl_photojournal",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765301/multiwavelength_crab_pd7iie.jpg',
    user_site_url: 'https://photojournal.jpl.nasa.gov/new'
  )
  User.create(
    username: "arrakisofficial",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765886/ifevtfoqfxvkhoner5oc.jpg',
    user_site_url: 'https://en.wikipedia.org/wiki/Jodorowsky%27s_Dune'
  )
  User.create(
    username: "berkeley",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765874/mmfahz1wvnuxosicaxod.jpg',
    user_site_url: 'http://astro.berkeley.edu/'
  )
  User.create(
    username: "unimatrix01",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765929/c8fhbonguysosapcctnz.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Borg'
  )
