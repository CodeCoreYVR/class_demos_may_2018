class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    if width < 0
      raise StandardError.new("Negative widths are not allowed")
    end

    @width = width
    @height = height
  end

  def area
    width * height
  end

  def perimeter
    width * 2 + height * 2
  end

  def is_square?
    width == height
  end
end