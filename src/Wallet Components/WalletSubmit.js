import React, { useState } from 'react';
import WalletItemList from './WalletItemList';
let cryptoAddressRegex = /^0x[a-fA-F0-9]{40}$/g
let entries = 0
export default function WalletSubmit() {
    
    const [data, setState] = useState('');
    return (
        <>
            <div class="flex m-4 shadow-xl rounded-md" >
                <input type="text" id="name" name="name" class="rounded-md p-1 border-4 border-black mx-auto w-96"
                    onChange={(event) => {
                        setState(event.target.value);
                        if(event.target.value.length < 1){ entries = 0 } 
                        else
                            entries += 1;
                    }}
                />
            </div>
            <div>
                {
                    data.match(cryptoAddressRegex) ? (<WalletItemList address={data} />) : entries > 0 ? (
                        <div class='text-white text-3xl bg-red-600 border-white border-1 text-center w-1/3 p-3 mx-auto rounded-xl font-bold'>
                            <p class=''> Unable to process current entry </p>
                        </div>)
                        : (<p class=''> </p>)
                        
                
                }
            </div>
        </>
    )
}


