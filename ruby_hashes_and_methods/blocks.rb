my_array = [1, 2, 4]

my_array.each do |num|
  puts num
end

my_array.each {|num| puts num }

# ```js
# const myArray = [1, 2, 4];

# myArray.forEach(function(num){
#   console.log(num);
# });
# ```

def my_method
  puts 'Hello'
  yield if block_given? # yield will execute the block of code
  puts 'Bye'
end

my_method
puts '>>>>'
my_method do
  puts 'hey'
  puts 'hey 1'
  puts 'what\'s up'
end
puts '>>>>'
my_method { puts 'HEY!'  }



def method_1
  puts 'hello'
  num = rand(1000)
  yield(num) if block_given?
  puts 'bye'
end

method_1 do |x|
  puts "today's lucky number is #{x}"
end