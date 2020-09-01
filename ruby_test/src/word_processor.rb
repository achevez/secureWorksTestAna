require 'yaml'

class WordProcessor
  def open_file(file_path)
    YAML.load_file(file_path)
  rescue StandardError => error
    puts "Rescued: #{error.inspect}"
    []
  end

  def longest_word(words)
    words.class == Array ? words.map(&:to_s).max_by(&:length) : words
  end

  def reverse_word(word)
    word.to_s.reverse!
  end
end
