require 'benchmark'

n = 100_000_000

Benchmark.bm do |x|
  x.report do
    n.times { "abc" }
  end

  x.report do
    n.times { :abc }
  end
end