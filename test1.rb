  boolean1 = ARGV[0]
    
    if boolean1 == "true"
      puts "The value is '#{boolean1}'"
    elsif boolean1.nil?
      puts "Boolean value missing"
    end
