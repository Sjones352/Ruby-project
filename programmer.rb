#!/usr/bin/env ruby
require './person.rb'

# Inheritance is a relation between two classes. The programmer class inherits
# from the person class therefore getting its features. In short programmer
# inherits the behaviour from person class.
class Programmer < Person
  def program(other_name)
    validate(other_name)
    puts "Hi, I am #{@name} and I am #{@gender}, and I am working. 
    I am going to be an awesome software engineer,#{other_name}!"
  end

  def validate(other_name)
    if @name.nil? || @gender.nil? || other_name.nil?
      puts "Wrong, I am #{@name} and I am #{@gender}, and I am working. 
      I am going to be an awesome software engineer,#{other_name}!"
    end
  end
end

