import React, { Component } from 'react'
import { Card, Icon, Button, Image, List } from 'semantic-ui-react'
import ProductService from "../services/productService";
import posed from 'react-pose';





const Box = posed.div();

const extra = (
  <a>

    <Icon name='music' />
    10 Şarkı
  </a>
)
const extra2 = (
  <a>

    <Icon name='time' />
    4:23
  </a>
)
function addcardpeople() {
  <Card
    style={{ width: "99%" }}
    className="col-12"
    header='Mehmet Yılmaz'
    meta='Şarkıcı'
    description='Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı '
    extra={extra}
  />
}

function addcard() {
  <Card
    style={{ width: "48%" }}
    header="Gangsta's paradise"
    meta='Şarkı'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra2}

  />
}






export default class ProductDetail extends Component {
  
  
  render() {
    const Box = posed.div({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    });
    return (


      
      <div>
        <Card
          style={{ width: "99%" }}
          className="col-12"
          header='Mehmet Yılmaz'
          meta='Şarkıcı'
          description='Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı '
          extra={extra}
        />
        <Card.Group>
          <Card
            style={{ width: "48%" }}
            header="Gangsta's paradise"
            meta='Şarkı'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra2}

          />


          <Card
            style={{ width: "48%" }}
            header="Gangsta's paradise"
            meta='Şarkı'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra2}
          />

          <Card
            style={{ width: "48%" }}
            header="Gangsta's paradise"
            meta='Şarkı'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra2}
          />
        </Card.Group>









      </div>
    )
  }
}
