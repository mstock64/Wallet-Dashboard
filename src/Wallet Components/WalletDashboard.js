import React, { useState, useEffect } from 'react';
import WalletItemList from './WalletItemList';
//let addresses = "0x6d7eb9e77f5e92d37916664cc4515371c38357e0,0xec91e709ded36128c01e7f9975b8e26e3f24b16c,0x4fcb2161e087f3a4153545a25304bd4e123a0e07,6aNsevTEaza6oanWKXC59rkD1q4sjbfXQ1Qo5mYMfeq2".split(',');

let cryptoAddressRegex = /^0x[a-fA-F0-9]{40}$/g

export default function WalletDashboard() {

    const [data, setState] = useState([]);
    const handler = (e) => {
        const val = e.target.value
        if (!val.match(cryptoAddressRegex)) {
            alert('Invald entry')
            return;
        }
        if (data.includes(val)) {
            alert('Dup detected ')
            return;
        }
        alert('val inserted')
        let tmp = [... data]
        tmp.push(<WalletItemList address={val} />)
        setState(tmp)
        
    }
    const display = () => {
        if(data.length > 0)
            return data.map((item) => <div> {item} </div>)
    }
    return (
        <>
            <div class="flex m-4 p-1 bg-gray-100 shadow-xl w-min rounded-md mx-auto ">
                <input
                    type="text"
                    id="name"
                    name="name"
                    class="rounded-md p-1 w-96 mx-auto "
                    onChange={handler}
                    defaultValue={''}
                />
            </div>
            <div>
                {
                   display()
                }
            </div>
        </>
    )
}


