"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
const bytes_1 = require("@ethersproject/bytes");
const solidity_1 = require("@ethersproject/solidity");
const bignumber_1 = require("@ethersproject/bignumber");
function combine(address, name) {
    const n = bignumber_1.BigNumber.from((0, bytes_1.hexConcat)([(0, solidity_1.keccak256)(['address', 'string'], [address, name]), (0, solidity_1.keccak256)(['string', 'address'], [name, address])]));
    return n;
}
exports.combine = combine;
//# sourceMappingURL=index.js.map