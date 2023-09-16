// GetTokenOwner.cdc

import Space from 0xf8d6e0586b0a20c7

// All scripts start with the `main` function,
// which can take an arbitrary number of argument and return
// any type of data.
//
// This function accepts a token ID and returns an Address.
pub fun main(id: UInt64): Address {

    // Access the address that owns the NFT with the provided ID.
    let ownerAddress = Space.owners[id]!
    return ownerAddress
}