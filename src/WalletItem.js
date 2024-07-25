
import React, { useState, useEffect, useCallback } from 'react';

//const options = {method: 'GET', headers: {accept: 'application/json', authorization: 'Basic emtfZGV2Xzg1YTRjYTYzMzExNDQzMGY4MjVmMWFlMTc4YjYxMmQyOg=='}};
//let addresses = "0x6d7eb9e77f5e92d37916664cc4515371c38357e0,0xec91e709ded36128c01e7f9975b8e26e3f24b16c,0x4fcb2161e087f3a4153545a25304bd4e123a0e07,6aNsevTEaza6oanWKXC59rkD1q4sjbfXQ1Qo5mYMfeq2".split(',');

//let addr = '0x6d7eb9e77f5e92d37916664cc4515371c38357e0'
//let apiKey = 'zk_dev_85a4ca633114430f825f1ae178b612d2'
//let uri = 'https://api.zerion.io/v1/wallets/' + addr + '/positions/?filter[positions]=only_simple&currency=usd&filter[fungible_ids]=&filter[trash]=only_non_trash&sort=value'


function WalletItem() {

    const [datam, setData] = useState([]);

    const changeData = useCallback(async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'Basic emtfZGV2Xzg1YTRjYTYzMzExNDQzMGY4MjVmMWFlMTc4YjYxMmQyOg=='
            }
        };

        let resp = await fetch('https://api.zerion.io/v1/wallets/0x4fcb2161e087f3a4153545a25304bd4e123a0e07/positions/?filter[positions]=only_simple&currency=usd&filter[trash]=only_non_trash&sort=value', options)
        let j = await resp.json()
        setData(j.data)



    }, []);

    useEffect(() => {
        changeData()
    }, [changeData]);



    return (
        <div class="grid grid-cols-* m-3 p-2 rounded-sm mx-min">
            { datam.length > 0 ? ( 
            <div class="grid gap-2 grid-cols-4 text-black">
                {
                    datam.map((coin) => {
                        if(coin.attributes.quantity.int > 0){
                        return <div class="grid bg-slate-300 rounded-md p-3 w-auto shadow-2xl text-right">
                            <span><b>Coin Name:</b> {coin.attributes.fungible_info.name} </span>
                            <span><b>Value:</b> ${coin.attributes.value === null ? 0.00 : coin.attributes.value.toFixed(2)} </span>
                            <span><b>Price:</b> ${coin.attributes.price.toFixed(2)} </span>
                            <span><b>Quantity:</b> {coin.attributes.quantity.float === null ? 0.0 : coin.attributes.quantity.float.toFixed(2)} </span>
                        </div>
                        }
                    })
                }
            </div>
            ) : (<p> loading data</p>)
}

        </div>
    )
}

export default WalletItem;

