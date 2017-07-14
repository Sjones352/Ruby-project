  value1 = ARGV[0]
    
    if value1 == "true"
      puts "The value is '#{value1}'"
    else value1.nil?
      puts "Boolean value missing"
    end
