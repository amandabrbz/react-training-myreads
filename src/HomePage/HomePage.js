import React from "react";
import "./HomePage.css";

/**
 * PROPS
 * {
 * img: {src, alt}
 * title
 * authors
 * }
 */

const Card = ({img, title, authors}) => {
  return <React.Fragment>
    <img src={img.src} alt={img.alt} />
    <p>{title}</p>
    <ul>
      {authors.map((author, index) => {
        return <li key={index}>{author}</li>
      })}
    </ul>
  </React.Fragment>
}

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <h3>Tô lendo</h3>
          <div className="row">
            <div className="col-md-3">
              <Card title="titulo1" authors={['alo', 'alo2']} img={{src: "http://placekitten.com/200/300", alt:"cat"}} />
            </div>
            <div className="col-md-3">
              <img src="" alt="It's an cat" />
              <p>Titulo do livro</p>
              <ul>
                <li>autor</li>
                <li>autor</li>
              </ul>
            </div>
            <div className="col-md-3">
              <img src="http://placekitten.com/200/300" alt="It's an cat" />
              <p>Titulo do livro</p>
              <ul>
                <li>autor</li>
                <li>autor</li>
              </ul>
            </div>
          </div>
          <h3>Quero ler</h3>
          <div className="row">
            <div className="col-md-3">
              <img src="http://placekitten.com/200/300" alt="It's an cat" />
              <p>Titulo do livro</p>
              <ul>
                <li>autor</li>
                <li>autor</li>
              </ul>
            </div>
            <div className="col-md-3">
              <img src="http://placekitten.com/200/300" alt="It's an cat" />
              <p>Titulo do livro</p>
              <ul>
                <li>autor</li>
                <li>autor</li>
              </ul>
            </div>
          </div>
          <h3>Já li</h3>
          <div className="row">
            <div className="col-md-3">
              <img src="http://placekitten.com/200/300" alt="It's an cat" />
              <p>Titulo do livro</p>
              <ul>
                <li>autor</li>
                <li>autor</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
