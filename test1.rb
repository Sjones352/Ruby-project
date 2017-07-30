  value1 = ARGV[0]

  # if nothing is passed, value1 contains nil
  # if any string of cahracters is passed, value1 contains a String

  # error conditions
  # if the value is nil, output error message
  # if the value is niether the word true nor the word false, output error
  # happy path business logic
  # if the value is false no output statement
  # if the value is true output statement

   errors = []

  if value1.nil?
    errors.push("Boolean value missing")

  elsif (value1 != "true") && (value1 != "false")
    errors.push("Boolean value missing")
  elsif value1 == "false"
  else 
    puts "Value is #{value1}"

  end

  if !errors.empty?
    warn "Errors encountered:\n" + errors.join("\n")
    exit 1
  end

  