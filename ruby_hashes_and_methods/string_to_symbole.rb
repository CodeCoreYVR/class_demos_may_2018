greetings = ["hello", "greetings", "hola", "hi"]

hash = { }

greetings.each do |v|
  hash[v.to_sym] = v.size
end

p hash