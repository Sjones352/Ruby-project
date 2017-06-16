
# Passing arguments to class.
class Script
  def self.method(programer1_name, gender, programer2_name)
    puts "sup, I am #{programer1_name}, and I am #{gender}. I am working hard.
     I am going to be an awesome software engineer,#{programer2_name} "
  end
end
Script.method(ARGV[0], ARGV[1], ARGV[2])