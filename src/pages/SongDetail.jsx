import React, { Component, useEffect, useState } from 'react'
import posed from 'react-pose';
import { Icon, Card } from 'semantic-ui-react'
import ProductService from '../services/productService';
import ProductList from './ProductList';





const extra = (
    <a>
        null
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











export default class SongDetail extends Component {





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



        const patName = this.props.location.pathname
        const editedPathName = patName.slice(7)
        return (




            <div>
                <Card

                    style={{ width: "100%" }}
                    className="col-12"
                    header={}
                    meta="Şarkı"
                    description='Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı '
                    extra={extra}

                />


                <button onClick={this.changeVisibility} className="btn btn-dark w-100 mt-3 mb-4 ">{visible ? "Show Song Details" : "Hide Song Details"}</button>

                <Animation pose={visible ? "visible" : "hidden"}>



                </Animation>
            </div>
        )
    }
}
