require 'logger'

class Person
	def initialize(name, gender)
		@logger = Logger.new($stdout)
		@name = name
		@location = "Home"
		@gender = "female"
		@logger.debug ("Person:new instance created")
	end
	attr_accessor :location, :name, :gender

	def say_hi
		puts "My name is #{name}. Iam at #{location} and I am #{gender}. Hello"
	end
end
sandra = Person.new('diana', 'female')
sandra.say_hi
