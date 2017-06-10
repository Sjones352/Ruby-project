#!/usr/bin/env ruby

# This is a class method that describes the name,
# gender and location of person
class Programmer
  # Setter and getter method
  attr_accessor :person

  # This constructor declares instance variables.
  # Initialize method takes a parameter called name
  def initialize(name)
    @name = name
    @person = nil
  end
   
  # input is a class method of Programmer. self points to the class.
  def self.input
    program = Programmer.new(ARGV[0])
    program.person = ARGV[1]
    return program
  end

  def program
    puts "sup, I am #{@name}, and I am working, leave me alone #{@person}"
  end
end

Programmer.input.program
