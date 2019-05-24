PASSWORD = "supersecret"
# PostRole.delete_all
# ProfileRole.delete_all
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
		password: PASSWORD,
		profile_attributes: { 
			about: Faker::GreekPhilosophers.quote,
      birth_date: Faker::Date,
      gender: rand(0..6)
		}
  )
# 	if u.valid?
#     p = Profile.create(
# 			about: Faker::GreekPhilosophers.quote,
#       birth_date: Faker::Date,
#       gender: rand(0..6),
# 			user_id: u.id
# 		)
# # puts(p.user.first_name)
# # puts(p.valid?)
# # p.save
# 	end

end

users = User.all
profiles = Profile.all
		
puts("Generated #{ users.count } users")
puts("Generated #{ profiles.count } profiles")
puts("Login with #{super_user.email} and password: #{PASSWORD}")


	
# q.answers = rand(0..15).times.map do
# 	Answer.new(body: Faker::GreekPhilosophers.quote, user: users.sample)
# end

# q.follows = users.shuffle.slice(0, rand(users.count))
# q.role = role.shuffle.slice(0, rand(role.count / 2))
# end
# end


# 20.times do
# Role.create(
# title: Faker::Book.genre
# )
# end

# role = Role.all

# 200.times do
# created_at = Faker::Date.backward(365 * 5)
# p = Post.create(
# title: Faker::Hacker.say_something_smart,
# body: Faker::ChuckNorris.fact,
# view_count: rand(100_000),
# created_at: created_at,
# updated_at: created_at,
# contact_person: "#{first_name} #{last_name.}"
# contact_email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
# user: users.sample
# )

# if q.valid?
# q.answers = rand(0..15).times.map do
# 	Answer.new(body: Faker::GreekPhilosophers.quote, user: users.sample)
# end

# q.follows = users.shuffle.slice(0, rand(users.count))
# q.role = role.shuffle.slice(0, rand(role.count / 2))
# end
# end

# questions = Question.all
# answers = Answer.all

# puts Cowsay.say("Generated #{ questions.count } questions", :ghostbusters)
# puts Cowsay.say("Generated #{ answers.count } answers", :stegosaurus)
# puts Cowsay.say("Generated #{ tags.count } tags", :moose)
