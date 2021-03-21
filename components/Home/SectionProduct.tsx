import React, { ReactElement } from 'react'
import DisplayProducts from '../DisplayProducts'

interface Props {
    
}

export default function SectionProduct({}: Props): ReactElement {
    return (
        <div className="section-product-container">
            <h2 className="label-product">Product</h2>
            <DisplayProducts/>
        </div>
    )
}
