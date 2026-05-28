import requests
try:
    from bs4 import BeautifulSoup
except Exception:
    BeautifulSoup = None

def get_space_news():

    url = "https://www.space.com/news"

    response = requests.get(url)

    if BeautifulSoup is None:
        return [{
            "title": "Dependência ausente: beautifulsoup4 (bs4). Instale e reinicie o backend."
        }]

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