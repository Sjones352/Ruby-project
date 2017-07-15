  def display(val)

  errors = []

   if val != "0" && val.to_i != 0
      puts "you passed the number #{val}."
   elsif val.nil?   
     puts "you did not pass any arguments"             
   else (val.is_a? String)
     errors.push("I do not like strings. Try again!") 
    end
  
   if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end
end

print display(ARGV[0])