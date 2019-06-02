PASSWORD = "supersecret"
PostRole.destroy_all
ProfileRole.destroy_all
Role.destroy_all
Follow.destroy_all
Post.destroy_all
Profile.destroy_all
User.destroy_all

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD,

)

roleList = [
	"Producer",
	"Director",
	"Screenwriter",
	"Production Designer",
	"Art Director",
	"Costume Designer",
	"Cinematographer",
	"Editor",
	"Actor",
	"Voice Actor",
	"Musician",
	"Music Supervisor",
	"Sound Technician",
	"Location Manager",
	"Lighting Technician",
	"Runner",
	"Playwright",
	"Scenic Designer",
	"Lighting Designer",
	"Costume Designer",
	"Set Designer",
	"Sound Designer",
	"Dancer",
	"Singer",
	"Background Actor",
	"Composer",
	"Front of House Manager",
	"Stage Manager",
	"Theatrical Technician",
	"Technical Director",
	"Stagehand",
	"Dramaturg",
	"Grips"
]

roleList.map{|r|
	Role.create(
		title: r
	)
}

roles = Role.all

Profile.create(
	user: super_user,
	about: Faker::GreekPhilosophers.quote,
	birth_date: Faker::Date.backward(365 * 100),
	gender: "male",
	)

	super_user.profile.roles = roles.shuffle.slice(0, rand(roles.count / 2))


gender = [
	"Female",
	"Male",
	"Female",
	"Male",
	"Female",
	"Male",
	"Non Binary",
	"Female",
	"Male",
	"Trans Female",
	"Female",
	"Male",
	"Trans Male",
	"Female",
	"Male",
	"Unspecified"
	"Female",
	"Male",
	"Female",
	"Male",
]

20.times do
  first_name = Faker::Name.first_name
	last_name = Faker::Name.last_name
	u = User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
	password: PASSWORD,

		profile_attributes: { 
			about: Faker::GreekPhilosophers.quote,
      		birth_date: Faker::Date.backward(365 * 100),
			gender: gender.sample,
			user: u
		}
	)

	if u.valid?
		u.profile.roles = roles.shuffle.slice(0, rand(roles.count / 2))
	end

end

users = User.all
profiles = Profile.all
profile_roles = ProfileRole.all

productions =[
	"Theatre",
	"Musical",
	"Dance",
	"Short Film",
	"Feature Film",
	"Student Film",
	"Music Video",
	"Performance Art",
	"Radio Play",
	"Audio Book",
	"TV"
]

def include_any?(array) array.any? {|i| self.include? i} end

20.times do
	first_name = Faker::Name.first_name
	last_name = Faker::Name.last_name
	created_at = Faker::Date.backward(365 * 5)
	min_age = rand(0..90)
	max_age = min_age+10
	p = Post.create(
		title: Faker::Job.title,
		body: Faker::Marketing.buzzwords,
		min_age: min_age,
		max_age: max_age,
		gender: gender.sample,
		paid: Faker::Boolean.boolean,
		union: Faker::Boolean.boolean,
		production_type: productions.sample,
		company: Faker::Company.name,
		created_at: created_at,
		contact_name: "#{first_name} #{last_name}",
		contact_email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
		user_id: users.sample.id,
	)
	if p.valid?
		p.roles = roles.shuffle.slice(0, rand((1..3)))
		p.followers = users.shuffle.slice(0, rand(users.count))
	end

end

posts = Post.all
post_roles = PostRole.all
follows = Follow.all

puts("Generated #{ roles.count } roles")
puts("Generated #{ users.count } users")
puts("Generated #{ profiles.count } profiles")
puts("Generated #{ profile_roles.count } profile roles")
puts("Generated #{ post_roles.count } post roles")
puts("Generated #{ posts.count } posts")
puts("Generated #{ follows.count } follows")
puts("Login with #{super_user.email} and password: #{PASSWORD}")

