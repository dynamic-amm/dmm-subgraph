import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const DMM_DYNAMIC_FEE_FACTORY_ADDRESS = '0xd9bfe9979e9ca4b2fe84ba5d4cf963bbcb376974'
export const DMM_STATIC_FEE_FACTORY_ADDRESS = '0x1c758af0688502e49140230f6b0ebd376d429be5'
export const DMM_STATIC_FEE_FACTORY_LEGACY_ADDRESS = ''

export const ETH_PRICING_POOLS = '0xaa70a5b819b4ee01f7e521a6e465a9b84303543d'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1000')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1000000000') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0x8d193c6efa90bcff940a98785d1ce9d093d3dc8a'

export const KNC_ADDRESS = ''
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = ''
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'bttc'

export let WHITELISTED_TOKENS = '0x8d193c6efa90bcff940a98785d1ce9d093d3dc8a,0xe7dc549ae8db61bde71f22097becc8db542ca100,0xca424b845497f7204d9301bd13ff87c0e2e86fcf,0x9b5f27f6ea9bbd753ce3793a07cba3c74644330d,0x1249c65afb11d179ffb3ce7d4eedd1d9b98ad006,0xe887512ab8bc60bcc9224e1c3b5be68e26048b8b,0xcbb9edf6775e39748ea6483a7fa6a385cd7e9a4e,0xdb28719f7f938507dbfe4f0eae55668903d34a15,0xa20dfb01dca223c0e52b0d4991d4afa7e08e3a50,0x185a4091027e2db459a2433f85f894dc3013aeb5,0xedf53026aea60f8f75fca25f8830b7e2d6200662,0x65676055e58b02e61272cedec6e5c6d56badfb86,0x935faa2fcec6ab81265b301a30467bbc804b43d3,0x9888221fe6b5a2ad4ce7266c7826d2ad74d40ccf,0xe467f79e9869757dd818dfb8535068120f6bcb97,0x18fa72e0ee4c580a129b0ce5bd0694d716c7443e,0xae17940943ba9440540940db0f1877f101d39e8b,0x17f235fd5974318e4e2a5e37919a209f7c37a6d1'
