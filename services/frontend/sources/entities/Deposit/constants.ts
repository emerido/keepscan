
export const DepositStatus = {
    InitiatingDeposit: 0,
    WaitingForBtc: 1,
    BtcReceived: 2,
    SubmittingProof: 3,
    ApprovingTdtSpendLimit: 4,
    Minted: 5,
    Redeemed: 6,
    SetupFailed: 7
}

export const DepositStatusNames = {
    [DepositStatus.InitiatingDeposit]: 'Initiating deposit',
    [DepositStatus.WaitingForBtc]: 'Waiting for BTC',
    [DepositStatus.BtcReceived]: 'BTC received',
    [DepositStatus.SubmittingProof]: 'Submitting proof',
    [DepositStatus.ApprovingTdtSpendLimit]: 'Approving spend limit',
    [DepositStatus.Minted]: 'Minted',
    [DepositStatus.Redeemed]: 'Redeemed',
    [DepositStatus.SetupFailed]: 'Setup failed'
}

export const DepositSuccessStatuses = [
    DepositStatus.InitiatingDeposit,
    DepositStatus.WaitingForBtc,
    DepositStatus.BtcReceived,
    DepositStatus.SubmittingProof,
    DepositStatus.ApprovingTdtSpendLimit,
    DepositStatus.Minted,
    DepositStatus.Redeemed,
]

export const DepositFailureStatuses = [DepositStatus.SetupFailed]
