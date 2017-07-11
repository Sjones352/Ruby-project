    boolean1 = ARGV[0]

    if boolean1.is_a? (Integer)
      puts "You passed #{boolean1}"
    end
    if  boolean1.nil?
      puts "you did not pass me any arguments."
    end
    if   boolean1.is_a? (String)
      puts "I don't like Strings ."
  end
    