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
  password: PASSWORD
)

20.times do
	Role.create(
	title: Faker::Job.position
	)
end

roles = Role.all

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
			gender: rand(0..6),
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

50.times do
	first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
	created_at = Faker::Date.backward(365 * 5)
	p = Post.create(
	title: Faker::Job.title,
	body: Faker::Marketing.buzzwords,
	gender: rand(0..6),
	min_age: rand(0..50),
	max_age: rand(20..100),
	paid: Faker::Boolean.boolean,
	union: Faker::Boolean.boolean,
	production_type: Faker::Company.type,
	company: Faker::Company.name,
	created_at: created_at,
	contact_name: "#{first_name} #{last_name}",
	contact_email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
	user_id: users.sample.id,
	)
	if p.valid?
		p.roles = roles.shuffle.slice(0, rand(roles.count / 2))
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

