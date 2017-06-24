
errors = []

name = ARGV[0]

errors.push("err 1") if true != false
errors.push("err 2") if 1 < 2
errors.push("err 3") if 3 < 5

if !errors.empty?
  warn "Errors found"
  warn errors.join("\n")
  exit 1
end
