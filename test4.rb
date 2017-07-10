class Print 
  def self.disp(boolean1)
    puts "Boolean 1: #{boolean1}"
    
    errors = []

    if boolean1.to_i.to_s == boolean1
      errors.push("You passed #{boolean1}")
    elsif boolean1.nil?
      errors.push("you did not pass me any arguments.")
    elsif boolean1.to_s == boolean1
      errors.push("I don't like Strings Sandra.")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end

  end
end

Print.disp(ARGV[0])