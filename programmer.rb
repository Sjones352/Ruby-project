#!/usr/bin/env ruby
require './person.rb'

# Inheritance is a relation between two classes. The programmer class inherits
# from the person class therefore getting its features. In short programmer
# inherits the behaviour from person class.
class Programmer < Person
  # input is a class method of Programmer. self points to the class.
  def self.input
    program = Programmer.new(ARGV[0])
    program.person = ARGV[1]
    [program]
  end

  def program(other_name)
    puts "sup, I am #{name}, and I am working, leave me alone #{other_name}"
  end
end

bob = Programmer.new('jones', 'female')
bob.program('sandra')
bob.say_hi
