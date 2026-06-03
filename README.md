# Global Solution - Space Climate Monitor

<p align="center">
  <a href="https://www.fiap.com.br/"><img src="assets/logo-fiap.png" alt="FIAP" width="35%"></a>
</p>

<p align="center">
  <strong>Monitoramento Inteligente do Clima Espacial</strong>
</p>

---

# Space Climate Monitor

Conforme o desafio proposto pelo Global Solution do ano de 2026:

Como tecnologias avançadas de Inteligência Artificial, automação e computação podem impulsionar soluções inovadoras para a nova economia espacial?


Criei a solução integrada de **monitoramento do clima espacial** que combina inteligência artificial, visão computacional, automação web e análise de dados em tempo real para prever e analisar fenômenos espaciais que impactam a Terra.

### Link do vídeo: 

<img src="assets/space_monitor_home.png" widht="150">

---

## Índice

- [Autor](#autor)
- [Sobre o projeto](#sobre-o-projeto)
- [Problema de negócio](#problema-de-negócio)
- [Solução](#solução)
- [Como funciona](#como-funciona)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Interface web (React)](#interface-web-react)
- [API Backend](#api-backend)
- [Governança e Privacidade](#governança-e-privacidade)
- [Próximos Passos](#próximos-passos)

---

## Autor

**Space Climate Monitor — FIAP**

| Nome | RM | 
|------------|-----|
| <a href="https://www.linkedin.com/in/renanmendes26/">Renan de Oliveira Mendes</a> | RM563145 |

---

## Sobre o projeto

O **Space Climate Monitor** monitora, analisa e prevê fenômenos de clima espacial que podem afetar sistemas de comunicação, navegação por satélite, redes elétricas e operações espaciais na Terra.

Eventos como **tempestades solares**, **ejeções de massa coronal (CMEs)** e **ventos solares** podem causar:

- Interrupções em sinais de GPS e comunicações via satélite
- Sobrecargas em redes elétricas terrestres
- Riscos para astronautas em missões espaciais
- Degradação de componentes eletrônicos em satélites

O **Space Climate Monitor** processa dados em tempo real de múltiplas fontes — imagens solares, sensores de campo magnético e estações de monitoramento — e aplica **Machine Learning**, **Visão Computacional** e **IA Generativa** para fornecer alertas preditivos, análises contextuais e visualizações interativas.

### Principais funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| **Monitoramento em tempo real** | Coleta e processa dados de agências espaciais via automação web |
| **Análise de imagens solares** | Visão computacional para detectar erupções solares e manchas no Sol |
| **Previsão com ML** | Modelos preditivos de tempestades geomagnéticas baseados em séries temporais |
| **Chat inteligente (RAG)** | Tire dúvidas sobre clima espacial em linguagem natural com respostas contextuais |
| **Dashboards interativos** | Visualização de dados históricos e em tempo real com React |
| **Alertas automáticos** | Notificações sobre eventos solares de alto impacto |

## Captação de dados

Utilizando ferramentas, bibliotecas e técnicas de webscraping, mais conhecido como coleta automatizada de dados, criei um programa que busca nos principais sites dados e informações espaciais relevantes.

Além de exibir os dados no dashboard, é possível, utilizando técnicas deNLP (Natural Language Processing ou Processamento de Linguagem Natural), realizar a extração de features, embbedings e vetorização do texto para alimentar modelos de IA. 

<img src="assets/webscraping.png" widht="150">

## Análise de imagens solares

Utilizando técnologias modernas de visão computacional, treinei um modelo capaz de identificar pontos de interesses, erupções e eventos solares. Permitindo o estudo, monitoramento e predição de condições climaticas.

<img src="assets/satellite_analysis.png" widht="150">

## Machine Learning

A solução está a todo momento integrada a diversos pipelines, rodando modelo preditivos de machine learning utilizando séries temporais.

Dessa forma conseguimos prever tempestades geomagnéticas, asteroides, cometas e demais eventos espaciais.

<img src="assets/space_monitor_home.png" widht="150">

## Assistente Inteligente

Criei um agente conversacional inteligente, que utiliza RAG e linguagem natural com respostas contextuais para explicar, guiar e tirar dúvidas do operador ou o time de negócios.

<img src="assets/Climate_assistant.png" widht="150">

## Alertas

Utilizando monitoramento em tempo real, chamadas de APIs, a solução está sempre ativa e pronta para alertar casos graves de eventos solares adversos.

<img src="assets/alertas.png" widht="150">


---

## Problema de negócio

O clima espacial é um dos **maiores riscos naturais para a infraestrutura tecnológica moderna**. A cada 11 anos o Sol atinge o pico de sua atividade, aumentando drasticamente a frequência e intensidade de eventos capazes de causar:

- **Prejuízos bilionários** em satélites e redes de comunicação
- **Apagões elétricos** em larga escala (ex: Quebec, 1989)
- **Riscos à aviação** — rotas polares perdem comunicação via rádio
- **Perda de dados** e falhas em sistemas críticos

### Stakeholders

| Stakeholders | Necessidade |
|---------|-------------|
| **Operador de satélites** | Antecipar tempestades solares para manobras preventivas |
| **Companhia elétrica** | Proteger redes de distribuição contra correntes geomagneticamente induzidas |
| **Agência espacial** | Monitorar condições para lançamentos seguros |
| **Cientista/pesquisador** | Acessar dados históricos e modelos preditivos |
| **Aviação comercial** | Garantir comunicações seguras em rotas de alta latitude |

---

## Solução

### Oportunidade de Negócio

O mercado de **monitoramento de riscos climáticos espaciais** está em rápida expansão com:

- O aumento de satélites em órbita baixa (Starlink, OneWeb, etc.)
- A dependência global de GPS, telecomunicações e internet via satélite
- O avanço do máximo solar (ciclo 25, 2024-2026)
- A crescente exploração espacial comercial

### Valor Gerado

| Área | Valor |
|----------------|-----------|
| **Operações satélite** | Redução de perdas com manobras preventivas |
| **Redes elétricas** | Proteção contra apagões induzidos |
| **Aviação** | Segurança em rotas polares |
| **Pesquisa espacial** | Dados abertos e modelos preditivos |
| **Tomada de decisão** | Alertas precoces baseados em IA |

### Diferenciais Técnicos da Solução

| Diferencial | Impacto |
|----------------|-----------|
| **RAG + LLM local** | Informação precisa e contextualizada sem depender de nuvem |
| **Visão Computacional** | Detecção automatizada de eventos solares em imagens |
| **ML Preditivo** | Antecedência de horas a dias na previsão de tempestades |
| **Automação Web** | Coleta contínua de dados de múltiplas fontes |
| **Análise em tempo real** | Processamento instantâneo de séries temporais |
| **React + Dashboards** | Visualização interativa e responsiva |

---

## Como funciona

O sistema opera em seis etapas integradas:

1. **Coleta de Dados** — Automação web busca dados em tempo real de APIs públicas (NOAA SWPC, NASA DONKI, satélites GOES, SOHO, SDO).
2. **Processamento de Imagens** — Visão computacional analisa imagens solares para detectar erupções, manchas e ejeções de massa coronal.
3. **Indexação & RAG** — Dados textuais são processados com embeddings e armazenados em base vetorial para consultas contextuais.
4. **Modelagem Preditiva** — Machine Learning sobre séries históricas prevê índices Kp, tempestades geomagnéticas e fluxo de partículas.
5. **IA Generativa** — Respostas inteligentes usando modelo local (Ollama) com contexto recuperado via RAG.
6. **Visualização** — Frontend React exibe dashboards, alertas e o chat interativo.


## Arquitetura

```mermaid
flowchart TB
    subgraph Coleta
        API["APIs Públicas<br>(NOAA, NASA, GOES)"]
        WEB["Automação Web<br>(Web Scraping)"]
        IMG["Imagens Solares<br>(SOHO, SDO)"]
    end

    subgraph Backend
        COL["Coletor de Dados<br>(Python)"]
        CV["Visão Computacional<br>(Detecção de eventos)"]
        ML["ML Preditivo<br>(Tempestades Geomag.)"]
        EMB["Embeddings<br>(MiniLM)"]
        RAG["RAG Engine"]
    end

    subgraph Frontend
        API
        REACT["React · Vite<br>(Dashboards)"]
        CHAT["Chat IA<br>(RAG + LLM)"]
        ALERT["Sistema de<br>Alertas"]
    end

    API --> COL
    WEB --> COL
    IMG --> CV
    COL --> ML
    COL --> EMB --> VDB
    CV --> ML
    VDB --> RAG
    RAG --> LLM
    ML --> API
    LLM --> API
    CV --> API
    API --> REACT
    API --> CHAT
    API --> ALERT
```

### Pipeline de dados

```
Fontes externas (NOAA, NASA, SOHO, SDO)
        ↓
  Coleta automatizada (automação web + APIs)
        ↓
  Processamento:
    ├── Imagens → Visão Computacional (detecção de eventos)
    ├── Dados numéricos → ML Preditivo
    └── Dados textuais → Embeddings → ChromaDB
        ↓
  Integração via FastAPI (API REST)
        ↓
  Frontend React (Dashboards + Chat + Alertas)
```

---

## Tecnologias

| Camada | Tecnologia |
|--------|------------|
| **Frontend** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Backend** | [FastAPI](https://fastapi.tiangolo.com/) (Python) |
| **RAG / Embeddings** | `sentence-transformers/all-MiniLM-L6-v2` |
| **Visão Computacional** | [OpenCV](https://opencv.org/) / [YOLO](https://github.com/ultralytics/ultralytics) |
| **Machine Learning** | [scikit-learn](https://scikit-learn.org/) / [TensorFlow](https://www.tensorflow.org/) / [Prophet](https://facebook.github.io/prophet/) |
| **Automação Web** | [Selenium](https://www.selenium.dev/) / [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) |
| **Análise de Dados** | [Pandas](https://pandas.pydata.org/) / [NumPy](https://numpy.org/) |
| **Processamento de Imagens** | [Pillow](https://python-pillow.org/) / [OpenCV](https://opencv.org/) |
| **Linguagem** | Python 3.10+ / JavaScript (React) |

---

## Estrutura do repositório

```
space-climate-monitor/
├── backend/
│   ├── app/
│   │   ├── main.py  
│   │   └── ai/
│   │       └── assistant.py
│   │   └── cv/
│   │       ├── image_detector.py
│   │       └── uploads/
│   │   └── routes/
│   │       ├── ai_routes.py         
│   │       ├── alert_routes.py      
│   │       ├── cv_routes.py         
│   │       ├── news_routes.py       
│   │       └── space_routes.py
│   │   └── services/
│   │       ├── alert_service.py         
│   │       ├── nasa_service.py      
│   │       └── news_scraper.py         
│   ├── requirements.txt
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx / App.tsx
│   │   ├── components/
│   │   │   ├── AIChat.jsx
│   │   │   ├── AlertCard.jsx   
│   │   │   ├── ClimateChart.jsx       
│   │   │   ├── ImageUpload.jsx    
│   │   │   ├── MetricCard.jsx  
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsCard.jsx    
│   │   │   ├── Sidebar.jsx   
│   │   │   └── WorldMap.jsx 
│   │   ├── pages/
│   │   │   ├── AIAssistant.jsx
│   │   │   ├── Alert.jsx   
│   │   │   ├── Dashboard.jsx       
│   │   │   ├── Layout.jsx    
│   │   │   └── SatelliteAnalysis.jsx 
│   │   ├── services/
│   │   │   └── api.js              
│   │   └── styles/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
├── assets/
├── requirements.txt
├── package.json
├── .gitignore
└── README.md
```

---

## Pré-requisitos

1. **Python 3.10+**
2. **Node.js 18+**
3. **Chave de API - Modelo de LLM**
4. **Chave de API** para fontes de dados (NOAA SWPC, NASA DONKI) — gratuitas e abertas

---

## Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/ReMendess/space-climate-monitor.git
cd space-climate-monitor
```

### 2. Backend (Python/FastAPI)

```bash
# Crie um ambiente virtual (opcional)
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # Linux/macOS

# Instale as dependências
pip install -r backend/requirements.txt

# Inicie o servidor
uvicorn app.main:app --reload
```

### 3. Frontend (React/Vite)

```bash
cd frontend
npm install
npm run dev
```

Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).


## Interface web (React)

A interface foi desenvolvida com **React + Vite**:

- **Dashboard Principal** — Visualização em tempo real dos índices Kp, fluxo solar e atividade geomagnética
- **Solar Viewer** — Imagens do Sol processadas com visão computacional destacando regiões ativas e erupções
- **Chat IA** — Perguntas em linguagem natural respondidas com base em dados reais + RAG
- **Alertas** — Notificações sobre eventos solares de alto impacto (tempestades G3+, CMEs direcionadas à Terra)
- **Histórico** — Gráficos de séries temporais com dados históricos e previsões do modelo ML
- **Mapa de Impacto** — Visualização geográfica de regiões potencialmente afetadas

---

## Governança e Privacidade

| Aspecto | Abordagem |
|---------|-----------|
| **Dados utilizados** | Fontes públicas e abertas (NOAA, NASA) — sem dados sensíveis |
| **Armazenamento** | Base vetorial e cache processados localmente |
| **Guardrails da IA** | Sem recomendações operacionais críticas sem validação humana |
| **Transparência** | Todas as fontes e previsões são referenciadas com data/hora e nível de confiança |
| **Responsabilidade** | Aviso na interface: sistema de apoio à decisão, não substitui fontes oficiais |

---

## Idéias de Evolução da Solução

- [ ] Integração com dados em tempo real de satélites
- [ ] Modelo de Deep Learning para previsão de Tempestades solares (LSTM/Transformer)
- [ ] Pipeline MLOps automatizado
- [ ] Deploy em nuvem com escalabilidade automática
- [ ] App mobile (React Native) para notificações push
- [ ] Correlação automática entre eventos solares e falhas reportadas
- [ ] Integração com sistemas SCADA de redes elétricas
- [ ] API pública para terceiros (pesquisadores, empresas)
- [ ] Radar de vento solar com visualização 3D

