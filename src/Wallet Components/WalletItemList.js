import React, { useState, useEffect, useCallback } from 'react';
export default function WalletItemList({ address }) {

    const [datam, setData] = useState([]);
    const [toggleClose, setToggle] = useState(true)
    const changeData = useCallback(async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: ''
            }
        };

        let resp = await fetch('https://api.zerion.io/v1/wallets/' + address + '/positions/?filter[positions]=only_simple&currency=usd&filter[trash]=only_non_trash&sort=value', options)
        let j = await resp.json()
        setData(j.data)



    }, []);

    useEffect(() => {
        changeData()
    }, [address]);



    return (
        <div class="rounded-md w-auto m-4 p-1">

            <div class="grid grid-cols-* m-3 p-2 rounded-sm mx-min">
                {datam.length > 0 ? (
                    <div class="grid gap-8 grid-cols-4 text-white text-center">
                        <div class="col-span-4 flex justify-between text-center">
                            {
                                <div class='justify-center'>
                                    <span class=" text-white text-2xl"><strong> Wallet Worth:</strong> ${datam.reduce((curr, item) => item.attributes.value + curr, 0).toFixed(2)}</span>
                                </div>
                            }
                            <div class='justify-center'>
                                    <span class=" text-white text-2xl "><strong>Address:</strong> <span class="text-sm">{address} </span></span>
                                </div>
                            <div class='justify-between'>
                                <button type='button' class='bg-whiteborder-white border-2 w-5h-8rounded-full text-xl justify-end text-gray-800'
                                 onClick={(event) => {
                                    setToggle(!toggleClose)
                                 }}>-</button>
                            </div>

                        </div>
                        { toggleClose ? 
                            datam.map((coin) => {
                                if (coin.attributes.quantity.int > 0) {
                                    return <div class=" border-white border-2 p-2 text-white rounded-2xl">
                                        <div class="text-xl text-center mb-1">
                                            <span><strong>{coin.attributes.fungible_info.name} </strong>  </span>
                                        </div>
                                        <div class="grid grid-cols-2 m-4">
                                            <div class="mx-auto">
                                                <img src={coin.attributes.fungible_info.icon != null ? coin.attributes.fungible_info.icon.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"} alt='image' height='64px' width='64px' />
                                            </div>

                                            <div class="grid text-white text-wrap text-sm">
                                                <span><b>Value:</b> ${coin.attributes.value === null ? 0.00 : coin.attributes.value.toFixed(2)} </span>
                                                <span><b>Price:</b> ${coin.attributes.price.toFixed(2)} </span>
                                                <span><b>Quantity:</b> {coin.attributes.quantity.float === null ? 0.0 : coin.attributes.quantity.float.toFixed(2)} </span>
                                            </div>
                                        </div>
                                    </div>
                                }

                            }) : ''
                        }
                    </div>
                ) : (<p> loading data</p>)
                }

            </div>
        </div>
    )

}