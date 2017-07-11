    boolean3 = ARGV[0]
        
    errors = []

    if boolean3.nil?
      puts "nice Work"
    elsif boolean3.kind_of?(String)
      errors.push("The value you entered #{boolean3} is not correct")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end