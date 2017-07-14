value2 = ARGV[0]
    
    if value2 == "false"
      puts "The value is '#{value2}'"
    else value2.nil?
      puts "Boolean value missing"
    end
