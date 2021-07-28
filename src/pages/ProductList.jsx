import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions"
import { toast } from "react-toastify";


export default function ProductList(props) {




    
    const dispatch = useDispatch()


    const [songs, setSongs] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getSongs().then(result => setSongs(result.data.data))
    }, [])

    const handleAddToCart = (song) => {
        dispatch(addToCart(song))
        toast.success(`${song.songName} Sepete Eklendi!`)
    }


    const getSeoName = (song) => {
        <h1>`{"asdfg"}`</h1>
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                            <Table.HeaderCell>Şarkı İsmi</Table.HeaderCell>
                            <Table.HeaderCell>Şarkı Süresi</Table.HeaderCell>
                            <Table.HeaderCell>Şarkı Sahibi</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        songs.map(song => (
                            <Table.Row key={song.id}>
                                
                                    <Table.Cell > <Link to={`/songs/${song.seoName}`}>{song.songName}</Link></Table.Cell>
                                    <Table.Cell> <Link to={`/songs/${song.seoName}`}>{song.songSure}</Link></Table.Cell>
                                    <Table.Cell> <Link to={`/creators/${song.songCreator}`}>{song.songCreator}</Link></Table.Cell>
                                    
                                

                                <Table.Cell><Button onClick={() => handleAddToCart(song)}>Sepete Ekle</Button></Table.Cell>
                            </Table.Row>

                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
