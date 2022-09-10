## Note: We are working on the next version of this library, which will include batch calling and other features. Once that is out, we will be deprecating this library. We generally recommend [ethers.js](https://docs.ethers.io/v5/api/providers/provider/#Provider--ens-methods)

# CNS.js

```js
npm i cnsjs-space
```

This is the rewrite of `ensjs`. If you are looking for the previous version, look for [ethereum-ens](https://www.npmjs.com/package/ethereum-ens)

## Overview of the API

### Setup

```
import CNS, { getCnsAddress } from 'cnsjs-space'

let provider = new ethers.providers.JsonRpcProvider('https://evm.confluxrpc.com')
let networkId = 1030
const cns = new CNS({networkId, provider, ensAddress: getCnsAddress(networkId)})
let address = await cns.name('99999.cfx').getAddress()
console.log(address)

```

### exports

```
default - CNS
getCnsAddress
getResolverContract
getCNSContract
namehash
labelhash
```

### CNS Interface

```
name(name: String) => Name
```

Returns a Name Object, that allows you to make record queries.

```
resolver(address: ConfluxAddress) => Resolver
```

Returns a Resolver Object, allowing you to query names from this specific resolver. Most useful when querying a different resolver that is different than is currently recorded on the registry. E.g. migrating to a new resolver

```
async getName(address: ConfluxAddress) => Promise<Name>
```

Returns the reverse record for a particular Conflux address.

```
async setReverseRecord(name: Name) => Promise<EthersTxObject>
```

Sets the reverse record for the current Conflux address

### Name Interface

```ts
async getOwner() => Promise<ConfluxAddress>
```

Returns the owner/controller for the current CNS name.

```ts
async setOwner(address: ConfluxAddress) => Promise<Ethers>
```

Sets the owner/controller for the current CNS name.

```ts
async getResolver() => Promise<ConfluxAddress>
```

Returns the resolver for the current CNS name.

```ts
async setResolver(address: ConfluxAddress) => Promise<ConfluxAddress>
```

Sets the resolver for the current CNS name.

```ts
async getTTL() => Promise<Number>
```

Returns the TTL for the current CNS name.

```ts
async getAddress(coinId: String) => Promise<ConfluxAddress>
```

Returns the address for the current CNS name for the coinId provided.

```ts
async setAddress(coinId: String, address: ConfluxAddress) => Promise<EthersTxObject>
```

Sets the address for the current CNS name for the coinId provided.

```ts
async getContent() => Promise<ContentHash>
```

Returns the contentHash for the current CNS name.

```ts
async setContenthash(content: ContentHash) => Promise<EthersTxObject>
```

Sets the contentHash for the current CNS name.

```ts
async getText(key: String) => Promise<String>
```

Returns the text record for a given key for the current CNS name.

```ts
async setText(key: String, recordValue: String) => Promise<EthersTxObject>
```

Sets the text record for a given key for the current CNS name.

```ts
async setSubnodeOwner(label: String, newOwner: ConfluxAddress) => Promise<EthersTxObject>
```

Sets the subnode owner for a subdomain of the current CNS name.

```ts
async setSubnodeRecord(label: String, newOwner: ConfluxAddress, resolver: ConfluxAddress, ttl: ?Number) => Promise<EthersTxObject>
```

Sets the subnode owner, resolver, ttl for a subdomain of the current CNS name in one transaction.

```ts
 async createSubdomain(label: String) => Promise<EthersTxObject>
```

Creates a subdomain for the current CNS name. Automatically sets the owner to the signing account.

```ts
async deleteSubdomain(label: String) => Promise<EthersTxObject>
```

Deletes a subdomain for the current CNS name. Automatically sets the owner to "0x0..."

## Resolver Interface

```ts
address
```

Static property that returns current resolver address

```ts
name(name) => Name
```

Returns a Name Object that hardcodes the resolver

npm publish --access public
