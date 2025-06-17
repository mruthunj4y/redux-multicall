import React from 'react';
import { ChainId } from './consts';
interface Props {
    chainId: ChainId;
    blockNumber: number | undefined;
    blocksPerFetch?: number;
}
export declare function Updater({ chainId, blockNumber, blocksPerFetch }: Props): React.JSX.Element;
export {};
