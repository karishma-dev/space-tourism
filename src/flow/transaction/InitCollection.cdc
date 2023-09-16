// InitCollection.cdc

import Space from 0xf8d6e0586b0a20c7

// This transaction will be signed by any user account who wants to receive tokens.
transaction {
    prepare(acct: AuthAccount) {
        // Create a new empty collection for this account
        let collection <- Space.NFTCollection.new()

        // store the empty collection in this account storage.
        acct.save<@Space.NFTCollection>(<-collection, to: /storage/NFTCollection)

        // Link a public capability for the collection.
        // This is so that the sending account can deposit the token to this account's
        // collection by calling its `deposit(token: @NFT)` method.
        acct.link<&{Space.NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)
    }
}