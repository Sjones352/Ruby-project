value2 = ARGV[0]
   errors = []
    
    if value2 == "false"
      puts "The value is '#{value2}'"
    else value2.nil?
       errors.push("Boolean value missing")
    end

 if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end