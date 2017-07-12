    user_input = ARGV[0]

    error = []

    if ARGV.is_a? (Integer)
      puts "You passed #{ARGV}"
    end
    if  user_input.nil?
      puts "you did not pass me any arguments."
    end
    if   user_input.is_a? (String)
     error.push("I don't like Strings.")
  end
  
  if !error.empty?
      warn "Errors encountered:\n" + error.join("\n")
      exit 1
  end