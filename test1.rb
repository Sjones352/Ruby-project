class Print 
  def self.disp(boolean1)
    puts "Boolean 1: #{boolean1}"
    
    errors = []

    if boolean1 == "true"
      errors.push("The value is '#{boolean1}'")
    elsif boolean1.nil?
      errors.push("Boolean value missing")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end

  end
end

Print.disp(ARGV[0])
