import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button,  FormField, Label } from 'semantic-ui-react'
import ForeverTextInput from '../utilities/customFormControls/ForeverTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { console.log(values) }} >
                <Form className="ui form">
                    <ForeverTextInput name="productName" placeholder="Ürün Adı"/>
                    <ForeverTextInput name="unitPrice" placeholder="Ürün fiyatı" />
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
