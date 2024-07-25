
const WalletSubmit = () => {
    return (
        <div class="flex m-4 p-4 bg-slate-300 shadow-lg w-min rounded-md mx-auto">
                <input type="text" id="name" name="name" class="rounded-md p-1 mr-4" minlength="26" maxlength="35"/>
                <input type="submit" value="Submit" class="rounded-sm    border-2 m-2 bg-gray-200 p-1 hover:bg-white hover:text-black" /> 
        </div>
    )
}

export default WalletSubmit;