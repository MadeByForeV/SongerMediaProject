import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button,  FormField, Label } from 'semantic-ui-react'
import ForeverTextInput from '../utilities/customFormControls/ForeverTextInput'

export default function ProductAdd() {
    const initialValues = { songName: "", songSure: "1:00" }

    const schema = Yup.object({
        productName: Yup.string().required("Şarkı Adı Zorunlu"),
        unitPrice: Yup.number().required("Şarkı Süresi Zorunlu"),
    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { console.log(values) }} >
                <Form className="ui form">
                    <ForeverTextInput name="songName" placeholder="Şarkı Adı"/>
                    <ForeverTextInput name="songSure" placeholder="Şarkı Süresi" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
