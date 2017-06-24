
require './programmer.rb'

programmer1_name = ARGV[0]
programmer1_gender = ARGV[1]
programmer2_name = ARGV[2]


# The script then creates a new instance of Programmer using the programmer 1 information
programmer = Programmer.new(programmer1_name, programmer1_gender)
programmer.program(programmer2_name) 
