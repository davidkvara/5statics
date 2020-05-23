import React, { useState, useEffect } from "react";
import {
  Article,
  ArticleTitle,
  Container,
  HyperLink
} from "./component-styles";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key={aq}")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setData(result.results);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h3>Oh snap!</h3>;
  } else if (!isLoaded) {
    return "...";
  }

  return (
    <div>
      <h2 style={{ apptitle }}>Dro Science app</h2>
      <main className="list">
        <Container>
          {data.map(article => (
            <Article key={article.short_url}>
              <ArticleTitle>
                <HyperLink href={article.url}>{article.title}</HyperLink>
              </ArticleTitle>
              <p>{article.abstract}</p>
              <p style={articleauthor}>
                <b>{article.byline}</b>
              </p>
            </Article>
          ))}
        </Container>
      </main>
    </div>
  );
};

const articleauthor = {
  textAlign: "right",
  fontSize: "smaller",
  opacity: "0.8"
};

const apptitle = {
  textAlign: "center",
  color: "#414141",
  fontSize: "xxx-large",
  textShadow: "2px 1px 2px #aeadad"
};

export default App;
