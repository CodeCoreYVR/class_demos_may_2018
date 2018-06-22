class Rectangle
  attr_accessor :width, :height

  # To make arguments in an initialize optional
  # or any method optional, give them a
  # default argument.

  # In the initialize below if width and/or height
  # are not given, they will be 0.
  def initialize(width = 0, height = 0)
    @width = width
    @height = height
  end

  def area
    width * height
  end

  # In ruby, methods that return a boolean should
  # be postfixed with a "?". This is just convention
  # it doesn't have even special meaning.
  def is_square?
    width == height
  end
end

r1 = Rectangle.new
r1.width = 10
r1.height = 20

p r1
puts r1.area
puts r1.is_square?

r2 = Rectangle.new(30, 30)

p r2
puts r2.is_square?