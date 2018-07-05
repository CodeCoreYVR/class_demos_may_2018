class Vector
  attr_accessor :x, :y

  # Vector.new(1, 0)
  # Vector.new(2, 2)
  def initialize(x, y)
    @x = x
    @y = y
  end

  # Vector.new(1, 1) + Vector.new(3, 3)
  # Vector.new(1, 1) + Vector.new(2, 3)
  # Operator overloading allows us write methods
  # that take the place of operators such +, -, *, /,
  # ==, !=, <=, etc.
  # Vector.new(2, 2) + rhs
  def +(rhs)
    Vector.new(self.x + rhs.x, self.y + rhs.y)
  end

  # Exercise: Test A Method Length
  def length
    Math.sqrt(x ** 2 + y ** 2)
  end
end
