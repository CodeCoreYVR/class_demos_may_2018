my_array = ['hello', 'hi', 'hola', 'bonjour']

my_array.each do |greeting|
  define_method(greeting) do |name|
    "#{greeting} #{name}"
  end
end

code = "
puts 'hi'
puts 'whats up'
puts 'bye'
"


methods = [:upcase, :capitalize, :downcase, :length, :swapcase, :reverse]

input = gets.chomp

methods.each do |mth|
  puts input.send(mth)
end