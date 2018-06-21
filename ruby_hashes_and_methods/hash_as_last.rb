def my_method(name, info = {})
  puts "Hello #{name}"
  puts "City is #{info[:city]}"
  puts "Company is #{info[:company]}"
  puts "age is #{info[:age]}"
end

my_method('john', { age: 32, city: 'Vancouver', company: 'abc' })
my_method 'john', { age: 32, city: 'Vancouver', company: 'abc' }
my_method 'john', age: 32, city: 'Vancouver', company: 'abc'