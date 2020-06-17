PASSWORD = "supersecret"
PostRole.destroy_all
ProfileRole.destroy_all
Role.destroy_all
Follow.destroy_all
Post.destroy_all
Profile.destroy_all
User.destroy_all

super_user = User.create(
  first_name: "Sansa",
  last_name: "Stark",
  email: "ss@winterfell.gov",
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
	"Choreographer",
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
	gender: "Female",
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
	"Unspecified",
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
			about: Faker::TvShows::GameOfThrones.quote,
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

productions = [
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
	"TV",
	"Commercial"
]

titles = [
	"Slightly-Eccentric Business Founder, Any Ethnicity",
	"Distraught News Reporter",
	"Female Needed For Beauty Product Commercial",
	"Mandarin & English Speaking Actress Needed",
	"Casting Call For Student Short",
	"Actor And Actress Needed For Student Silent Film",
	"Hand Model Needed For Product Shoot",
	"Casting Male and Female Actors for a Corporate Video",
	"Looking For Background Performers",
	"Casting Diverse Individuals For The Pride Parade",
	"Seeking Talented Actors, Models And/Or Dancers",
	"Seeking Stagehand",
	"Two Fit People Needed For Music Video",
	"Elderly Couple, No Experience Performance Necessary",
	"Casting Young Musician",
	"Short Film Casting For Various Roles",
	"Producer and Director Needed For Short Play Festival"
]

descriptions = [
	"Storyline: A nihilistic teenage suicide shop owner puts his business and belief at risk when he falls in love with a female customer and secretly sabotages her plan to commit suicide.
 
	1st Lead - [KEVIN] Male, all ethnicities, late teens to early 20s. Kevin has to run the family business and be in touch with suicidal people on a daily basis. Despite the unusual nature of his business, he manages to keep a straight face and maintains enjoying his routines in a certain way. Just like any other teenager, he goes above and beyond to fight for love when he falls for Maya, a female customer.
	
	2nd Lead - [MAYA] Female, late teens to early 20s, all ethnicities. Maya is a customer of the suicide shop. As a goth girl, she’s obsessed with death. She’s determined to carry on with her suicide attempts despite Kevin’s efforts to stall her with faulty products. In the end, she’s moved by Kevin’s caring acts to her and changes her mind.",

	"No acting experience required to apply for this casting This is for a commercial shot in Vancouver, BC. The salary is $3,000 for a one day shoot.
 
	KKStreet Casting is looking KIDS who plays musical instrument (age 6-12)
	
	The audition will take place May 30 to June 1st. You must be available for the shoot that will take place between June 16 to 19 2018.
	
	Your child will only be needed for a one day shoot.
	
	Please submit photos and write a summary about your child.",
	"Deadline for Submissions: May 15th
	Callback dates: May 18th at the Carousel Theatre
	Tentative Shoot Dates: June 9-11th
	Rate of Pay: $225/day for leads
	Location: Vancouver and the surrounding area
	
	STORYLINE: A couple in their sixties grapple with conflicting personalities on a second date. Though they eagerly long to find love, they realize that they can’t change who they are and the date ends with the disappointment of unfulfilled longing.",
	
	"CHARACTERS:
	
	SANDRA - Female (Age: 60-65)
	Asian or Mixed Ethnicity - Sandra is a reserved, responsible and sensitive woman who has always played it safe in her life. She is on a second date with Jim who convinces her to break into a bowling alley for fun. She feels very tense the entire time, as this is very much out of her comfort zone. Throughout the date, she constantly feels a clash between the adventurous and youthful woman Jim perceives her to be and who she truly is. (Lead)
	
	JIM - Male (Age: 60-65)
	Open ethnicity - Jim is a playful, mischievous, highly romantic man who is desperate to find love. On his second date with Sandra, his good intentions fall flat when he tries to woo her in all the wrong ways. Although he doesn’t really know Sandra very well, he thinks that she is the missing piece in his lonely life. As a result he projects onto her who he hopes that she is instead of truly seeing her. (Lead)",
	
	"About the Project:
	The director and producer both have had their works screen at several international film festivals worldwide, such as Palm Springs International Shortfest, TIFF, Montreal World Film Festival, Fantastic Fest and VIFF. This high quality passion project will be shot on 16mm film by award-winning cinematographer Norm Li, csc. We look forward to receiving your submission!",
	"An actor needed from Vancouver for portraying the role of a Father from a Punjabi family, age: 38 – 45 years (beard not compulsory, no turban)
	- Dates:
	• Its’ a 1 day shoot however, we need their availability for 2 days, since due to weather conditions, the shoot may get postponed to the next day.
	• 26th April from 10am – 4pm, & 27th April from 10am – 2.30pm.
	- Purpose: Outdoor photo shoot for pictures/videos to be used for digital/print advertising of a resort in Squamish.
	- Non Union, Paid $100",
	"After her daughter stole a necklace from a store, Simone decides to bring back objects she stole when she was younger to their owners.

	(Shooting dates: 05/02/2018 - 05/07/2018 - Vancouver, BC)
	
	SIMONE
	Female, 30's, Asian, African, or Latina. Simone is a single mother. She’s a domestic worker who believes that she doesn’t deserve any love. As a result, she pushes people away from her, including Maya, her daughter. She believes that her past faults define her future. She’s a very lawful, responsible and strict person who wants to be an example yet neglects her daughter by not being present for her. Indeed, she’s constantly working hard as if she was trying to punish herself for her past sins.",
	
	"MAYA
	Female, 8 years old, Asian, African, Latina or Mixed Ethnicity. Maya is energetic, playful, intelligent, funny, provoking and cheeky. She craves for her mother’s attention. As she doesn’t know her father, her bond to her mom is really precious to her.
	
	MR. BERNARD
	Male, 60's, all ethnicities. Mr. Bernard used to be a hippie. He’s a musician. He’s energetic, intelligent, provoking with a good sense of humor. He’s light-hearted, open-minded.
	
	BEN
	Male, 30s, all ethnicities. He’s Simone’s old love interest. He had a one night stand with Simone when they were in high school, then he left the city and they never saw each other again."

]

def include_any?(array) array.any? {|i| self.include? i} end

50.times do
	first_name = Faker::Name.first_name
	last_name = Faker::Name.last_name
	created_at = Faker::Date.backward(365 * 5)
	min_age = rand(0..90)
	max_age = min_age+10
	p = Post.create(
		title: titles.sample,
		body: descriptions.sample,
		min_age: min_age,
		max_age: max_age,
		gender: gender.sample,
		paid: Faker::Boolean.boolean,
		union: Faker::Boolean.boolean,
		production_type: productions.sample,
		company: Faker::Company.name,
		created_at: created_at,
		contact_name: "#{first_name} #{last_name}",
		contact_email: "#{first_name.downcase}.#{last_name.downcase}@gmail.com",
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

