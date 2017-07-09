class Print 
  def self.disp(boolean1)
    puts "Boolean 1: #{boolean1}"
    
    errors = []

    if boolean1.nil?
      errors.push("Nice Work sandra")
    elsif boolean1.kind_of?(String)
      errors.push("The value you entered #{boolean1} is not correct")
    end

    if !errors.empty?
      warn "Errors encountered:\n" + errors.join("\n")
      exit 1
    end

  end
end

Print.disp(ARGV[0])