  value1 = ARGV[0]
    
     errors = []

    if value1 == "true"
      puts "The value is '#{value1}'"
    else value1.nil?
      errors.push("Boolean value missing") 
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end