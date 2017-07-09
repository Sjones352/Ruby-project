
    # create an array to hold potential errors
    # check conditions one by one that would be considered errors if they fail
    #     if a condition fails, push an error messge onto the error array
    # After looking at all conditions, if the error array is not empty
    #      output a message that contains a concatenation of all the messes in the array
    #      exit with error


  class Print 

<<<<<<< HEAD
class Print 
  def self.disp(boolean1, boolean2)
  	puts "Boolean 1: #{boolean1}"
  	puts "Boolean 2: #{boolean2}"
    
    errors = []

    if boolean1.nil?
    	errors.push("Missing boolean 1")
    elsif boolean1.to_s != "true" && boolean1.to_s != "false"
    	errors.push("'#{boolean1}' is not true or false")
    end

    if boolean2.nil?
    	errors.push("Missing boolean 2")
    elsif boolean2.to_s != "true" && boolean2.to_s != "false"
    	errors.push("'#{boolean2}' is not true or false")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end

  end
end

Print.disp(ARGV[0], ARGV[1])


=======
  def self.disp(boolean_1, boolean_2)
    if boolean_1 == boolean_2
    puts "Missing boolean value 1"
    puts "Missing boolean value 2"
   elsif (boolean_1.to_s !=  boolean_2.to_s )
    warn "#{boolean_1} is not a valid boolean value"
    warn "#{boolean_2} is not a valid boolean value"
    elsif boolean1.nil?
      warn "#{boolean_1} is not a valid boolean value"
    else
        puts "you are very wrong"
    end
  end
end

Print.disp(ARGV[0], ARGV[1])
>>>>>>> 722be7033dc9282751989427ab56ed2fb6d6077c
