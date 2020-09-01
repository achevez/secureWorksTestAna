#!/usr/bin/env ruby

require 'yaml'
require './src/word_processor.rb'

FILE_PATH = './config/words.yml'

if __FILE__ == $0
  word_processor = WordProcessor.new
  words = word_processor.open_file(FILE_PATH)
  longest_word = word_processor.longest_word(words)
  word_reversed = word_processor.reverse_word(longest_word)
  puts "Longest word: #{longest_word}"
  puts "Longest word reversed: #{word_reversed}"
end
