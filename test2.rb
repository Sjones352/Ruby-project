value2 = ARGV[0]
   
    errors = []

  if value2.nil?
    errors.push("Boolean value missing")

  elsif (value2 != "true") && (value2 != "false")
    errors.push("Boolean value missing")
  elsif value2 == "true"
  else 
    puts "Value is #{value2}"

  end

  if !errors.empty?
    warn "Errors encountered:\n" + errors.join("\n")
    exit 1
  end