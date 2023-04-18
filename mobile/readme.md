# Unispend integration example (Web)

This demo demostrates how to easily integrate the `Unispend` Multiwallet shopping experience in your web application.

<br></br>
## Installation

```
 https://unispend.com/?cSContext={{YOUR PREFERRED SPEND CONTEXT}}
```

## Keywords:

- __SpendContext__: This is the payment method the Unispend experience should use for checkout. It's that simple! 🚀🚀🚀

- __Embed__: The `Unispend` experience.

- __Chimoney Object__: An object to be sent to the api to carry out a payment. `NOTE:` Only necessary for `Pay With Wallet` integration.


<br></br>
## Integrating Unispend

Integrating Unispend will require the use of a webview in your existing application. 

## Customizing Unispend:

Customizing `Unispend` is a walk in the park just as installing it is. Infact, you don't need to do anything other than modify the `url` a bit. Simple right? Let's get it: `https://unispend.com/?cSContext=evm&primaryColor=eb4034&xAppTheme=light`



### Customization Options:

- __primaryColor__: Css hex code without the `#` to use as primaryColor for the shopping experience.

- __maxAmountInUSD__: Maximum amount in __USD__(Dollars) a user is allowed to spend in the `Embed`.
- __cSContext__: The `SpendContext`.
- __xAppStyle__: The app theme to use in the `Unispend` widget.

### OTHER INFO

- `xAppStyle`

We currently support any of these __four(4)__ app themes.

```js
[
 'light',
 'dark', 
 'moonlight',
 'royal'
]
```

- `csContext`

We support payments through these methods.

```js
 [
 'valora', 
 'evm', 
 'mobile',
 'web', 
 'chimoney_redeem',
 'status', 
 'metamask',
 'walletconnect',
 'celo',
 'api_call'
]
```

Want to enable checkouts on Unispend with your [`own wallet`](#ext_wallet)?

<br></br>

### <a name="ext_wallet"></a> **External wallet Integration**

---
![Image](/screenshots/pay_with_wallet.png)

- [Get your Api Key](https://chimoney.readme.io/reference/sandbox-environment).
- [Build the experience](#integrate_ext_wallet).

<br></br>
### <a name="get_api_key"></a>  **Get your Api Key**

To integrate your wallet for payments(`Pay With Wallet`), you need an `ApiKey`. This will be needed to send the `Chimoney Object` to the api.
To get the `Apikey` click [here](https://chimoney.readme.io/reference/sandbox-environment).

<br></br>
### <a name="integrate_ext_wallet"></a>  **Build the experience**

`Unispend` provides the `Pay with Wallet` option for the `api_call` SpendContext, This allows you __intercept__ the checkout process and manage the payment flow, You can attach a listener to the event posted by the `Unispend` widget to get an object which should be sent to the api to finish the payment flow. Before that you can carry out your business specific logic. We have two categories for this integration:

- Flutter and other clients(mobile) that require a `JavascriptChannel`.
- React Native and other clients(mobile) that can directly add event listeners to the `postMessage` api from the loaded webpage.


### Clients that require a `JavascriptChannel`:
For clients that require a specialized `JavascriptChannel`, Unispend emits the `Chimoney Object` via a channel called `UnispendChannel` or via `ChiSpendChannel (deprecated)`. You can listen on the channel(s) to get the required object.

### Clients(mobile) that can directly add event listeners to the `postMessage` api from the loaded webpage:
All that's needed to be done is to intercept `window.postMessage` from the webapage and you will get the required object.

## Examples and resources
- [Chispend Widget](https://github.com/Chimoney/chimoney-community-projects/tree/main/submissions/chispend_widget)
- [Chispend App](https://github.com/Chimoney/chimoney-community-projects/tree/main/submissions/chispend_app)
- [React Native Webview](https://reactnative.dev/docs/0.61/webview)
- [How to intercept postMessage](https://stackoverflow.com/questions/68334181/how-to-use-postmessage-in-a-react-native-webview)
<br></br>
### Sample Chimoney Object for external wallet integration

```json
{
  "description": "",
  "chimoneys": [
    {
      "valueInUSD": 50,
      "enabledToRedeem": [
        "giftcard"
      ],
      "type": "giftcard",
      "email": "ayomide@unispemd.com",
      "redeemData": {
        "countryCode": "US",
        "productId": 5,
        "productName": "Amazon US",
        "recipientCurrencyCode": "USD",
        "senderCurrencyCode": "USD",
        "senderFee": 0.5
      },
      "spendContext": "web"
    }
  ],
  "miniApp": false
}
```


`Need more help?`
Shoot an email to us at  [support](mailto:support@unispend.com). We're more than happy to help you out in building your Unispend experience.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Support

If you're having trouble with the Demo or your integration, please reach out to us at <support@unispend.com> or come chat with us on Slack.

## ChiConnect API Reference

For external wallet integrations checkout the [ChiConnect API Docs](https://chimoney.readme.io). It should cover all your needs. _Still stuck ?😓 No problems reach [help](mailto:support@unispend.com)._ 

## License

MIT
