# Exercise: Mapping Sentences
# Generate random sentences from the array
# of arrays below using map. For example,
# "John ate the couch", "John sat on an apple", etc.

word_groups = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

puts word_groups.map{ |group| group.sample }.join(" ").capitalize
