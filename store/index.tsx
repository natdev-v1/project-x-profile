import { FC } from 'react'
import { RecoilRoot } from 'recoil'

interface Props {
    
}

const MyStore : React.FC<Props> = (props) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}

export default MyStore
