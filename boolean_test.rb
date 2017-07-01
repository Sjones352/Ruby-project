
    # create an array to hold potential errors
    # check conditions one by one that would be considered errors if they fail
    #     if a condition fails, push an error messge onto the error array
    # After looking at all conditions, if the error array is not empty
    #      output a message that contains a concatenation of all the messes in the array
    #      exit with error

errors = []


name = ARGV[0]
name_1 = ARGV[1]
name_2 = ARGV[2]


errors.push("err1") if !! name == name_1
errors.push("err2") if !(name_1 != name_2)
errors.push("err3") if (name == name_1) 

if !errors.empty?
  warn "Errors found"
  warn errors.join("\n")
  exit (1)
end