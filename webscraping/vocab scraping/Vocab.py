class Vocab:
	def __init__(self, No, vocab, sound, meaning, pos, difficulty, exampleText, exampleTranslate, exampleMeaning):
		self.No = No
		self.vocab = vocab
		self.sound = sound
		self.meaning = meaning
		self.meaningAns = meaning
		self.POS = pos
		self.exampleText = exampleText
		self.exampleTranslate = exampleTranslate
		self.exampleMeaning = exampleMeaning
		self.difficulty = difficulty
		
#create object
# laptop1 = Laptop('Dell Alienware', 'Intel Core i7', 512, 8, 2500.00)

# #convert to JSON string
# jsonStr = json.dumps(laptop1.__dict__)

# #print json string
# print(jsonStr)