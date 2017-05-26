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
user1 = User.create(
    username: "CaptainJaneway",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765991/zsbic43zqsac14hi0u9h.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Kathryn_Janeway',
    bio: 'Coffee, black.'
  )
user2 = User.create(
    username: "Chakotay",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765941/uclqed6kvqjhtbbvdqzv.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Chakotay',
    bio: 'First officer on the USS Voyager'
  )
user3 =  User.create(
    username: "deepspace9",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765953/bfctc5kezu09q2dejn8f.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Deep_Space_9',
    bio: ''
  )
user4 =  User.create(
    username: "singularity",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765960/qtg69wkeiwyrijhg2mho.jpg',
    user_site_url: 'https://en.wikipedia.org/wiki/Technological_singularity',
    bio: 'It\'s coming'
  )
user5 =  User.create(
    username: "uss_voyager",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765997/ilgxpauadjqfx8obyjxx.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/USS_Voyager',
    bio: 'This ship has been our home, it\'s kept us together, it\'s been part of our family.'
  )
user6 =  User.create(
    username: "jlpicard",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765982/wufoy8ignpzzelv93pl9.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Jean-Luc_Picard',
    bio: 'Make it so'
  )
user7 =  User.create(
    username: "deography",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765936/oqscpaeda9jqd8oqi3a1.jpg',
    user_site_url: 'http://deography.com/starscape/',
    bio: 'Dylan O\'Donnel: web developer, graphic designer, online marketer, and astrophotographer.'
  )
user8 =  User.create(
    username: "nasa",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765975/xxgb8ki8or5abanm6xz6.jpg',
    user_site_url: 'https://apod.nasa.gov/apod/archivepix.html',
    bio: 'Exploring the universe, one photo at a time'
  )
user9 =  User.create(
    username: "cassini",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765946/n52okgrfdewtl7dodtdw.jpg',
    user_site_url: 'https://saturn.jpl.nasa.gov/',
    bio: 'Flagship-class robotic unmanned spacecraft sent to the planet Saturn'
  )
user10 =  User.create(
    username: "caltech",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495676237/nbatb1oxqwl4gmll8jke.jpg',
    user_site_url: 'http://www.astro.caltech.edu/',
    bio: 'Caltech official page'
  )
user11 =  User.create(
    username: "jpl_photojournal",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765301/multiwavelength_crab_pd7iie.jpg',
    user_site_url: 'https://photojournal.jpl.nasa.gov/new',
    bio: 'Jet Propulsion Laboratory\'s premier astrophotography photojournal.'
  )
user12 =  User.create(
    username: "arrakisofficial",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765886/ifevtfoqfxvkhoner5oc.jpg',
    user_site_url: 'https://en.wikipedia.org/wiki/Jodorowsky%27s_Dune',
    bio: ''
  )
user13 =  User.create(
    username: "berkeley",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765874/mmfahz1wvnuxosicaxod.jpg',
    user_site_url: 'http://astro.berkeley.edu/',
    bio: 'Go Bears!!'
  )
user14 =  User.create(
    username: "unimatrix01",
    password: "password",
    user_img_url: 'https://res.cloudinary.com/dl091hw7z/image/upload/v1495765929/c8fhbonguysosapcctnz.jpg',
    user_site_url: 'http://memory-alpha.wikia.com/wiki/Borg',
    bio: 'Resistance is futile.'
  )

















# User 1

Photo.create(
  title: "Oxygen",
  description: "In the great Carina nebula",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772623/golplqabkafbmecue7hx.jpg",
  user_id: user7.id,
  width: 900,
  height: 676
)

Photo.create(
  title: "m8 lagoon nebula",
  description: "with a new camera!",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772670/dyln591lh5vetqwglxex.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "The status of libery nebula",
  description: " ",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772591/o8l27eu5vnikzlbp6xnt.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "horsehead nebula",
  description: " ",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772561/e36hubd78ayeyifyxxar.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "The rosette nebula",
  description: " ",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772538/xvgxh9mkyv4asrz9qq3g.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "The flame nebula",
  description: " ",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772518/n59exbxstp6fqc7kxi3t.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "The nebula with a face",
  description: "NHC 3324. Can you see it? The round face with the nose to the right?",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772490/vwhtk7bxurhlx3cob96r.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "The clouds of orion",
  description: "even city dwellers can see Orion's belt in the sky each evening",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772423/jrkotq8ok2kvhkseg7xy.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "horsehead swims in hydrogen",
  description: "The hydrogen is mapped to blue.",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772366/swt4hpkjn1y8sgmo12hq.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "luminous supermoon corona",
  description: "in full color",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772304/unzyphk8moqbgskqypup.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "andromeda M31",
  description: "King of the visual galaxies",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772277/c9nksc5xkt3bt9hu3g3n.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "the sculptor galaxy",
  description: "2 hour 27 mins of exposure time",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772222/if57iro156g2vmztz2ud.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "m20 Trifid",
  description: "The trifid Nebula (m20)",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495772121/a5pwlgtkuuxqj1dqvpww.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)

Photo.create(
  title: "Oxygen in the great carina nebula",
  description: "I imaged this last night under perfect conditions in record time (82 x 60s total) with the usual 3 narrowband filters. Using the PHP/GD online narrowband preview tool I developed recently (link below) I decided the Hubble palette was the most compelling as the doubly ionised Oxygen spewing from the core is really brilliant and not normally so visible against the normally-red Hydrogen, seen here in the green areas.",
  img_url: "https://res.cloudinary.com/dl091hw7z/image/upload/v1495771504/jqbovownlqjupvyr0ipd.jpg",
  user_id: user7.id,
  width: 900,
  height: 1400
)
