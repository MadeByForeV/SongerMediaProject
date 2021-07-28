import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignIn({signOut} ) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
                <Dropdown pointing="top left" text="USER">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
