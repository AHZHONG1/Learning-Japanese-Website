import requests
from bs4 import BeautifulSoup
from requests_html import HTMLSession
from Vocab import Vocab
import json
import io
import time

URLArray = [
    "https://iknow.jp/courses/566921?language_code=en",
    "https://iknow.jp/courses/566922?language_code=en",
    "https://iknow.jp/courses/566924?language_code=en",
    "https://iknow.jp/courses/566925?language_code=en",
    "https://iknow.jp/courses/566926?language_code=en",
    "https://iknow.jp/courses/566927?language_code=en",
    "https://iknow.jp/courses/566928?language_code=en",
    "https://iknow.jp/courses/566929?language_code=en",
    "https://iknow.jp/courses/566930?language_code=en",
    "https://iknow.jp/courses/566932?language_code=en",
    "https://iknow.jp/courses/594768?language_code=en",
    "https://iknow.jp/courses/594770?language_code=en",
    "https://iknow.jp/courses/594771?language_code=en",
    "https://iknow.jp/courses/594772?language_code=en",
    "https://iknow.jp/courses/594773?language_code=en",
    "https://iknow.jp/courses/594774?language_code=en",
    "https://iknow.jp/courses/594775?language_code=en",
    "https://iknow.jp/courses/594777?language_code=en",
    "https://iknow.jp/courses/594778?language_code=en",
    "https://iknow.jp/courses/594780?language_code=en",
    "https://iknow.jp/courses/615865?language_code=en",
    "https://iknow.jp/courses/615866?language_code=en",
    "https://iknow.jp/courses/615867?language_code=en",
    "https://iknow.jp/courses/615869?language_code=en",
    "https://iknow.jp/courses/615871?language_code=en",
    "https://iknow.jp/courses/615872?language_code=en",
    "https://iknow.jp/courses/615873?language_code=en",
    "https://iknow.jp/courses/615874?language_code=en",
    "https://iknow.jp/courses/615876?language_code=en",
    "https://iknow.jp/courses/615877?language_code=en",
    "https://iknow.jp/courses/615947?language_code=en",
    "https://iknow.jp/courses/615949?language_code=en",
    "https://iknow.jp/courses/615950?language_code=en",
    "https://iknow.jp/courses/615951?language_code=en",
    "https://iknow.jp/courses/615953?language_code=en",
    "https://iknow.jp/courses/615954?language_code=en",
    "https://iknow.jp/courses/615955?language_code=en",
    "https://iknow.jp/courses/615957?language_code=en",
    "https://iknow.jp/courses/615958?language_code=en",
    "https://iknow.jp/courses/615959?language_code=en",
    "https://iknow.jp/courses/616077?language_code=en",
    "https://iknow.jp/courses/616078?language_code=en",
    "https://iknow.jp/courses/616079?language_code=en",
    "https://iknow.jp/courses/616080?language_code=en",
    "https://iknow.jp/courses/616081?language_code=en",
    "https://iknow.jp/courses/616082?language_code=en",
    "https://iknow.jp/courses/616083?language_code=en",
    "https://iknow.jp/courses/616084?language_code=en",
    "https://iknow.jp/courses/616085?language_code=en",
    "https://iknow.jp/courses/616086?language_code=en",
    "https://iknow.jp/courses/598434?language_code=en",
    "https://iknow.jp/courses/598432?language_code=en",
    "https://iknow.jp/courses/598431?language_code=en",
    "https://iknow.jp/courses/598430?language_code=en",
    "https://iknow.jp/courses/598427?language_code=en",
    "https://iknow.jp/courses/598426?language_code=en",
    "https://iknow.jp/courses/598425?language_code=en",
    "https://iknow.jp/courses/598424?language_code=en",
    "https://iknow.jp/courses/598423?language_code=en",
    "https://iknow.jp/courses/598422?language_code=en",
]

URL = "https://iknow.jp/courses/566932?language_code=en"

def start():
    number = 0
    No = 1
    for url in URLArray:
        session = HTMLSession()
        response = session.get(url)
        response.html.render()

        soup = BeautifulSoup(response.html.html, 'html.parser')
        VocabsArray = []
        results = soup.find_all('li', class_="item")
        for result in results:
            details = result.find('div', class_="item-details")
            vocab = details.find('a', class_="cue")
            translate = details.find('span', class_='transliteration')
            if translate:
                translate = translate.text.replace("[", "").replace("]", "")
            meaning = details.find('p', class_='response')
            pos = details.find('div', 'part-of-speech')
            pos = pos.text.lower()
            exampleTextFinal = ""
            exampleTranslateFinal = ""
            exampleMeaningFinal = ""
        
            sentences = result.find('div', class_="item-sentences")
            exampleTexts = sentences.find_all('p', class_="text")
            for exampleText in exampleTexts:
                exampleTextFinal = exampleTextFinal + exampleText.text + "|| "

            exampleTranslates = sentences.find_all('p', class_='transliteration')
            for exampleTranslate in exampleTranslates:
                exampleTranslateFinal = exampleTranslateFinal + exampleTranslate.text + "|| "

            exampleMeanings = sentences.find_all('p', class_='translation')
            for exampleMeaning in exampleMeanings:
                exampleMeaningFinal = exampleMeaningFinal + exampleMeaning.text + "|| "

            if translate:
                vocab1 = Vocab(No, vocab.text, translate, meaning.text, pos, (number // 1000) + 1, exampleTextFinal, exampleTranslateFinal, exampleMeaningFinal)
            else:
                vocab1 = Vocab(No, vocab.text, vocab.text, meaning.text, pos, (number // 1000) + 1, exampleTextFinal, exampleTranslateFinal, exampleMeaningFinal)
            VocabsArray.append(vocab1)
            No = No + 1

        with io.open('data/vocab{}.json'.format(number), 'w', encoding='utf-8') as f:
            f.write(
                json.dumps([vocab2.__dict__ for vocab2 in VocabsArray],
                        ensure_ascii=False))
        
        print(number)
        number += 100
        # time.sleep(1)

start()