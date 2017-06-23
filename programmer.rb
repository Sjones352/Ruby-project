#!/usr/bin/env ruby
require './person.rb'

# Inheritance is a relation between two classes. The programmer class inherits
# from the person class therefore getting its features. In short programmer
# inherits the behaviour from person class.
class Programmer < Person
  def program(other_name)
    return if !validate?(other_name)
    puts "Hi, I am #{@name} and I am #{@gender}, and I am working. 
    I am going to be an awesome software engineer,#{other_name}!"
  end
   
  # checks for name, gender,other name and prints a missing plus file name
  def validate?(other_name)
    if @name.nil? || @gender.nil? || other_name.nil?
      puts "Oops! Missing programmer1 name, programmer 1 gender, and programmer 2 name"
      puts "usage: #{$PROGRAM_NAME} programmer-1-name programmer-1-gender programmer-2-gender" 
      return false
    end

    return true


  end
end

