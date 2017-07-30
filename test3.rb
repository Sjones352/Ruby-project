    val3 = ARGV[0]
        
    errors = []

    if val3.nil?
      puts "nice Work"
    else 
      errors.push("The value you entered #{val3} is not correct")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end