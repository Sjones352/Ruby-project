#!/usr/bin/env ruby

programmer1_name = ARGV[0]
programmer1_gender = ARGV[1]
programmer2_name = ARGV[2]

 if ARGV.length < 3
  puts "Oops! Missing programmer1 name, programmer 1 gender, and programmer 2 name"
  puts "Usage: ,/my_script.rb programmer-1-name programmer-1-gender programmer-2-gender"
    exit
 end
     
 puts "Working on #{ARGV}";
