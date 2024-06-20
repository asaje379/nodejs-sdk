import { ApiOptions } from './typings';
export default function kkiapay(config: ApiOptions): {
    verify: (transactionId: string) => Promise<any>;
    refund: (transactionId: string) => Promise<any>;
};
