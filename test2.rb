boolean2 = ARGV[0]
    
    if boolean2 == "false"
      puts "The value is '#{boolean1}'"
    elsif boolean2.nil?
      puts "Boolean value missing"
    end
