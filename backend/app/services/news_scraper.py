import requests
from bs4 import BeautifulSoup

def get_space_news():

    url = "https://www.space.com/news"

    response = requests.get(url)

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    articles = []

    news = soup.select(".listingResult")

    for item in news[:5]:

        title = item.get_text(strip=True)

        articles.append({
            "title": title
        })

    return articles