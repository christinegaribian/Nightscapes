import React from 'react';

class PhotoDetail extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillReceiveProps(nextProps){
  //
  //   if (this.props.match.params.photoId !== nextProps.match.params.photoId) {
  //     this.props.requestSinglePhoto(nextProps.match.params.photoId);
  //   }
  // }
  //
  // componentDidMount(){
  //   this.props.requestSinglePhoto(this.props.match.params.photoId)
  // }
  //
  // componentWillMount(){
  //   debugger
  //   this.props.requestSinglePhoto(this.props.photo.id)
  // }


  render(){

    let { img_url, title, description, user } = this.props.photo;
    return (
      <section className="photo-detail">
        <img className="photo-detail-figure" src={img_url} alt={title}/>
        <ul className="photo-detail-info">
          <li>{title}</li>
          <li>{description}</li>
        </ul>
      </section>
    );
  }
};

export default PhotoDetail;
