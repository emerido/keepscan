export const RedeemStatus = {
    Requested: 0,
    Signed: 1,
    BtcTransferred: 5,
    Redeemed: 2,
    Liquidation: 3,
    Liquidated: 4,
    OperationFailed: 6
}


export const RedeemStatusNames = {
    [RedeemStatus.Requested]: 'Requested',
    [RedeemStatus.Signed]: 'Signed',
    [RedeemStatus.Redeemed]: 'Redeemed',
    [RedeemStatus.Liquidation]: 'Liquidation',
    [RedeemStatus.Liquidated]: 'Liquidated',
    [RedeemStatus.BtcTransferred]: 'BTC transferred',
    [RedeemStatus.OperationFailed]: 'Operation failed',
}

export const RedeemFailureStatuses = [
    RedeemStatus.Liquidation,
    RedeemStatus.Liquidated
]
