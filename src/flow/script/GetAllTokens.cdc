import Space from 0xSpace

pub fun main() : [UInt64] {
    // We basically just return all the UInt64 keys of `owners`
    // dictionary as an array to get all IDs of all tokens in existence.
    return Space.owners.keys
}