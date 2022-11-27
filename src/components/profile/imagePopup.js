import React, { Component } from 'react';
import { render } from 'react-dom';
import './profile.css';
import ModalImage from "react-modal-image";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      photos: [{
        url:"https://firebasestorage.googleapis.com/v0/b/freebies-df71a.appspot.com/o/rJvrYSQku3TrLWfNB673%2Fphotos%2Fimage.jpg?alt=media&token=fda54bde-9577-45f4-9631-9aa0ebf3da35",
        name:"cream"
      }]
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {this.state.photos && this.state.photos.map(photo => (
          // <LazyLoad key={photo.name}>
          <ModalImage
            small={photo.url}
            large={photo.url}
            alt={photo.name}
            hideDownload={true}
            hideZoom={true}
            className="modal-image"
          />
          // </LazyLoad>
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
