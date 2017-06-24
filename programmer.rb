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
    # create an array to hold potential errors
    # check conditions one by one that would be considered errors if they fail
    #     if a condition fails, push an error messge onto the error array
    # After looking at all conditions, if the error array is not empty
    #      output a message that contains a concatenation of all the messes in the array
    #      exit with error
    errors = []
    errors.push(" Missing programmer1 name") if @name.nil?
    errors.push(" Missing programmer1 gender") if @gender.nil?
    errors.push(" Missing programmer2 name") if other_name.nil?
    if !errors.empty?
        warn "Errors found"
        warn errors.join("\n")
        warn "usage: #{$PROGRAM_NAME} programmer-1-name programmer-1-gender programmer-2-name"
      return false
    end
    return true
  end
end

