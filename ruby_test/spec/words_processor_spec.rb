require './src/word_processor.rb'

describe 'Words processor' do
  let(:testClass) { WordProcessor.new }

  context 'when opening files' do
    let(:file_path) { './config/words.yml' }
    let(:invalid_file_path) { './config/word.yml' }

    it 'valid file path' do
      expect(testClass.open_file(file_path).empty?).to eq false
    end

    it 'invalid file path' do
      expect(testClass.open_file(invalid_file_path).empty?).to eq true
    end
  end

  context 'when returning longest word' do
    let(:regular_words) { %w[abcde abc a] }
    let(:same_lenght_longest_word) { %w[abcde qwe swedf] }
    let(:special_words) { [123, '1235', '!@%8', 'abcde'] }
    let(:number) { 543_21 }
    let(:longest) { 'abcde' }

    it 'longest word in collection' do
      expect(testClass.longest_word(regular_words)).to eq longest
    end

    it 'multiple longest words' do
      expect(testClass.longest_word(same_lenght_longest_word)).to eq longest
    end

    it 'collection with special characters and numbers' do
      expect(testClass.longest_word(special_words)).to eq longest
    end

    it 'one word' do
      expect(testClass.longest_word(longest)).to eq longest
    end

    it 'one number' do
      expect(testClass.longest_word(number)).to eq number
    end
  end

  context 'when reversing a word' do
    let(:word) { 'abcdef' }
    let(:word_reversed) { 'fedcba' }
    let(:phrase) { 'this is a phrase' }
    let(:phrase_reversed) { 'esarhp a si siht' }
    let(:number) { 543_21 }
    let(:number_reversed) { '12345' }
    let(:special_word) { '!@#$123#$"' }
    let(:special_word_reversed) { '"$#321$#@!' }

    it 'reverse a word' do
      expect(testClass.reverse_word(word)).to eq word_reversed
    end

    it 'reverse a phrase' do
      expect(testClass.reverse_word(phrase)).to eq phrase_reversed
    end

    it 'reverse a word when its numbers' do
      expect(testClass.reverse_word(number)).to eq number_reversed
    end

    it 'reverse a word when it has special characters' do
      expect(testClass.reverse_word(special_word)).to eq special_word_reversed
    end
  end
end
