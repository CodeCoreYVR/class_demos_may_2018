require "./cookie.rb"

class Oreo < Cookie
  attr_accessor :filling_type

  def initialize(sugar, butter, filling_type = "vanilla")
    super(sugar, butter)
    @filling_type = filling_type
  end

  # When inheriting from a class, you can replace
  # some of the methods of the parent class.
  # This is called overloading or overwriting.

  # When doing so, you can use the keyword `super`
  # inside of the method to call the parent class'
  # version of that method.
  def eat
    puts "From Oreo"
    super
  end

  def details
    "sugar: #{@sugar} / butter: #{@butter} / filling type: #{@filling_type}"
  end
end

# example:

o = Oreo.new(20, 20)
o.filling_type = "vanilla"

# To test if an object is an instance of a class use
# the ".is_a?" method.
o.is_a? Oreo # => true
o.is_a? Array # => false
o.is_a? Cookie # => true
o.is_a? Object # => true
o.is_a? BasicObject # => true