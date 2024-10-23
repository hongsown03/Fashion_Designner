let publicKey;
let show;
//Auto Connect
(async () => {
    await window.phantom.solana.connect();

    publicKey = window.phantom.solana.publicKey.toBase58();
    console.log(publicKey);
})();

//Manual connect 
const connectWallet = async () => {
    await window.phantom.solana.connect();

    publicKey = window.phantom.solana.publicKey.toBase58();
    show = window.phantom.solana.connect();
    console.log(publicKey);
    console.log(show);

}




//========= [Mint NFT PUBLICKEY] ==========
const PRIV_KEY = "_1K577Zwv1OxUlKg";

const toTransaction = (encodedTransaction) => solanaWeb3.Transaction.from(Uint8Array.from(atob(encodedTransaction), c => c.charCodeAt(0)));

const mintNft = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", PRIV_KEY);


    const fileInput = document.querySelector("#fileInput");

    var formdata = new FormData();
    formdata.append("network", "devnet");
    formdata.append("wallet", publicKey);
    formdata.append("name", "Fashion Designer"); 980
    formdata.append("symbol", "FD");
    formdata.append("description", "NFT Fashion Designer");
    formdata.append("attributes", '[{"trait_type":"dev power","value":"over 900"}]');
    formdata.append("external_url", "https://shyft.to");
    formdata.append("max_supply", "1");
    formdata.append("royalty", "5");//phần trăm hoa hồng nhận dc mỗi gd
    formdata.append("file", fileInput.files[0]);
    formdata.append("data", fileInput.files[0]);
    formdata.append("nft_receiver", publicKey);
    formdata.append('service_charge', `{ "receiver": "5C48nZDUAwSqxnfGYHFtxZGW4qWVeJLbBamfMZAwkvXd", "amount": 0.01}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api.shyft.to/sol/v1/nft/create_detach", requestOptions)
        .then(async response => {
            let res = await response.json();
            let transaction = toTransaction(res.result.encoded_transaction);

            const signedTransaction = await window.phantom.solana.signTransaction(transaction);
            const connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
            const signature = await connection.sendRawTransaction(signedTransaction.serialize());

            console.log("TRANSACTION CONFIRMED!!")

        })
        .catch(error => console.log('error', error));

}
//========= [Mint NFT PRIVATE KEY] ==========

// const PRIV_KEY_WALLET = "2937Ew3Refg32ibMJvjxeWrA7FYH5HBfuWta7rjaXaJ8CEn8CaCaZ8evPv7QiMN5TaY6BjgzRZN3m7rmV15JKfwk";

// const mintNftPriv = async () => {
//     var myHeaders = new Headers();
//     myHeaders.append("x-api-key", PRIV_KEY);


//     const fileInput = document.querySelector("#fileInput");

//     var formdata = new FormData();
//     formdata.append("network", "devnet");
//     formdata.append("private_key", PRIV_KEY_WALLET);
//     formdata.append("name", "LazyBee NFT");
//     formdata.append("symbol", "LB");
//     formdata.append("description", "NFT Music Platform!");
//     formdata.append("attributes", '[{"trait_type":"dev power","value":"over 900"}]');
//     formdata.append("external_url", "https://shyft.to");
//     formdata.append("max_supply", "1");
//     formdata.append("royalty", "5");//phần trăm hoa hồng nhận dc mỗi gd
//     formdata.append("file", fileInput.files[0]);
//     formdata.append("data", fileInput.files[0]);
//     formdata.append("nft_receiver", publicKey);
//     formdata.append('service_charge', `{ "receiver": "2fmz8SuNVyxEP6QwKQs6LNaT2ATszySPEJdhUDesxktc", "amount": 0.01}`);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow'
//     };

//     fetch("https://api.shyft.to/sol/v1/nft/create", requestOptions)
//         .then(async response => {
//             console.log("TRANSACTION CONFIRMED!!")

//         })
//         .catch(error => console.log('error', error));

// }

//========== [Tranfer Solana] ==========

const transferSol = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", PRIV_KEY);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "network": "devnet",
        "from_address": "78oZPkEVDvpm7DUXHC1ceLPqjazFU4joKzWF3reBWY6",//Người gửi
        "to_address": "6JCJ6HTPvYqkk7WhGPWKec2a3D3GhJo4TtbhdAQQhTJd",//Người nhận
        "amount": 2,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.shyft.to/sol/v1/wallet/send_sol", requestOptions)
        .then(async response => {
            let res = await response.json();
            let transaction = toTransaction(res.result.encoded_transaction);

            await window.phantom.solana.signTransaction(transaction);

            console.log("TRANSFER SUCCESSFULLY!!")
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

// Thong báo
function showNotification() {
    let title = "Connect ❤️";
    let icon = 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'; //this is a large image may take more time to show notifiction, replace with small size icon
    let body = "CONNECT SUCCESSFULLY!!!";

    let notification = new Notification(title, { body, icon });

    notification.onclick = () => {
        notification.close();
        window.parent.focus();
    }

}

const buyNFT = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", PRIV_KEY);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "network": "devnet",
        "marketplace_address": "5p4Bua5tSsSo1RJ94H1w5DiMSPfWcvMvnMVjPpZ6sJUb",
        "nft_address": "9A75AztajAwN9wTkg1BsC6xDEzC8pgjidtjnURQS5CZy",
        "price": 2,
        "seller_address": "AaYFExyZuMHbJHzjimKyQBAH1yfA9sKTxSzBc6Nr5X4s",
        "buyer_wallet": "GE4kh5FsCDWeJfqLsKx7zC9ijkqKpCuYQxh8FYBiTJe"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.shyft.to/sol/v1/marketplace/buy", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
