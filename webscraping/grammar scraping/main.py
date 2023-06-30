import requests
from bs4 import BeautifulSoup
from requests_html import HTMLSession
import json
import io
import time

URLArray = []

def getURLArray():
    URL = "https://bunpro.jp/grammar_points"
    URLDomainName = "https://bunpro.jp"
    session = HTMLSession()
    response = session.get(URL)
    response.html.render()

    soup = BeautifulSoup(response.html.html, 'html.parser')
    results = soup.find_all('div', class_="gp-search-wrapper_tiles")
    for result in results:
        links = result.find_all('a', href=True)
        for link in links:
            realLink = URLDomainName + link['href']
            URLArray.append(realLink)

def start():
    getURLArray()
    for url in URLArray:
        session = HTMLSession()
        response = session.get(url)
        response.html.render()

        soup = BeautifulSoup(response.html.html, 'html.parser')
        print(url)
        # results = soup.find_all('div', class_="gp-search-wrapper_tiles")
    

    # with io.open('data/vocab{}.json'.format(number), 'w',
    #              encoding='utf-8') as f:
    #     f.write(
    #         json.dumps([vocab2.__dict__ for vocab2 in VocabsArray],
    #                    ensure_ascii=False))

    # time.sleep(1)


start()