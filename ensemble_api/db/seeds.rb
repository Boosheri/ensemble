PASSWORD = "supersecret"
RoleTag.delete_all
Role.delete_all
Follow.delete_all
Post.delete_all
Profile.delete_all
User.delete_all

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD
)

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
	u = User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
  if u.valid?
    p = Profile.create(
			about: Faker::GreekPhilosophers.quote,
      birth_date: Faker::Date,
      gender: rand(0..6),
			# user: u
		)
# puts(p.user.first_name)
# puts(p.valid?)
# p.save
	end

end

users = User.all
profiles = Profile.all
		
puts("Generated #{ users.count } users")
puts("Generated #{ profiles.count } profiles")
puts("Login with #{super_user.email} and password: #{PASSWORD}")

