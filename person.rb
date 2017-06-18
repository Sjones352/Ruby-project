require 'logger'

# This is a class method that describes the name,
# gender and location of person
class Person
  attr_accessor :location, :name, :gender

  def initialize(name, gender)
    @logger = Logger.new($stdout)
    @name = name
    @location = 'Home'
    @gender = gender
    @logger.debug('Person:new instance created')
  end

  def say_hi
    puts "My name is #{name}. Iam at #{location} and I am #{gender}. Hello"
  end
end
