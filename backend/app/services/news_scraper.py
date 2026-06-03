import requests
try:
    from bs4 import BeautifulSoup
except Exception:
    BeautifulSoup = None

def get_space_news():

    url = "https://www.space.com/news"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch space.com news: {e}")
        return []

    if BeautifulSoup is None:
        return [{
            "title": "Dependência ausente: beautifulsoup4 (bs4). Instale e reinicie o backend."
        }]

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    articles = []

    # Try multiple selectors in case space.com changes its layout
    selectors = [
        ".listingResult",
        "article",
        ".content",
        '[class*="article"]',
        "h3 a",
        "h2 a",
        ".title a"
    ]

    news_items = []

    for selector in selectors:
        elements = soup.select(selector)
        if elements:
            news_items = elements
            break

    for item in news_items[:6]:

        title = item.get_text(strip=True)

        if title and len(title) > 10:
            articles.append({
                "title": title
            })

    return articles
