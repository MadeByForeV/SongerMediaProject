import React, { Component, useEffect, useState } from 'react'
import posed from 'react-pose';
import { Icon, Card } from 'semantic-ui-react'
import SongDetail from './SongDetail';
import ProductService from '../services/productService';

const getCreator = new ProductService()


console.log(getCreator.getBySongCreator())



const extra = (
  <a>
    
  </a>
)

const extragangstasparadise = (
  <div>
    <a href="https://open.spotify.com/track/7lQWRAjyhTpCWFC0jmclT4?si=2e086a80258c4c30">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=fPO76Jlnz6c">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)
const extrafairytale = (
  <div>
    <a href="https://open.spotify.com/track/2rzWSywjwzbysCmdOzssFR?si=d9983d11945a4ecf">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=WXwgZL4zx9o">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)
const extrafightback = (
  <div>
    <a href="https://open.spotify.com/track/6KigD0mlF4VGDYiSEzAyYw?si=752f80e540064ef0">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=CYDP_8UTAus">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)
const extrafireproof = (
  <div>
    <a href="https://open.spotify.com/track/34aYkYrY3sXhEU9O4VQgtB?si=c52294ed1b1d407a">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=HdiBc95H--Q">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)
const extraswinglynn = (
  <div>
    <a href="https://open.spotify.com/track/6hIOunhsLUT66KQgZV5dMD?si=9b80c11e61e94c6c">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=8WyGaus8ax0">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)
const extradumanyurek = (
  <div>
    <a href="https://open.spotify.com/track/1H7ozYuW7d17dqSzcvezJ6?si=6a517648a7b44e78">

      <Icon name="spotify" />
      Spotify'da dinle
    </a>
    <br />
    <a href="https://www.youtube.com/watch?v=hxEtaxWgUCA">
      <Icon name="youtube" />
      Youtube'de dinle
    </a>
  </div>

)













const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
})











export default class CreatorDetail extends Component {





  state = {
    visible: false
  }


  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { visible } = this.state
    return (




      <div>
        <Card

          style={{ width: "100%" }}
          className="col-12"
          header={this.props.location.pathname}
          meta="??ark??c??"  
          description='Lorem Ipsum, dizgi ve bask?? end??strisinde kullan??lan m??g??r metinlerdir. Lorem Ipsum, ad?? bilinmeyen bir matbaac??n??n bir hurufat numune kitab?? '
          extra={extra}

        />


        <button onClick={this.changeVisibility} className="btn btn-dark w-100 mt-3 mb-4 ">{visible ? "Hide Songs" : "Show Songs"}</button>

        <Animation pose={visible ? "visible" : "hidden"}>
          <Card.Group id = "songGroup">
            <Card
              style={{ width: "47.5%" }}
              header={"Gangsta's Paradise"}
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extragangstasparadise}
            />
            <Card
              style={{ width: "47.5%" }}
              header="Fairytale"
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extrafairytale}
            />
            <Card
              style={{ width: "47.5%" }}
              header="Fight Back"
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extrafightback}
            />
            <Card
              style={{ width: "47.5%" }}
              header="Fireproof"
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extrafireproof}
            />
            <Card
              style={{ width: "47.5%" }}
              header="Swing Lynn"
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extraswinglynn}
            />
            <Card
              style={{ width: "47.5%" }}
              header="Duman Y??rek"
              meta='??ark??'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

              extra={extradumanyurek}

            />
         
          </Card.Group>
        </Animation>
      </div>
    )
  }
}
