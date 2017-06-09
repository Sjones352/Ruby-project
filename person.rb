require 'logger'

# This is a class method that describes the name,
# gender and location of person
class Person
  attr_accessor :location, :name, :gender

  def initialize(name, _gender)
    @logger = Logger.new($stdout)
    @name = name
    @location = 'Home'
    @gender = 'female'
    @logger.debug('Person:new instance created')
  end

  def say_hi
    puts "My name is #{name}. Iam at #{location} and I am #{gender}. Hello"
  end
end

# Inheritance is a relation between two classes. The programmer class inherits
# from the person class therefore getting its features. In short programmer
# inherits the behaviour from person class.
class Programmer < Person
  def program(other_name)
    puts "sup, I am #{name}, and I am working, leave me alone #{other_name}"
  end
end

sandra = Person.new('diana', 'female')
sandra.say_hi
jones = Programmer.new('sandra', 'female')
jones.program('max')
