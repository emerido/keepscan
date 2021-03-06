import React from 'react'
import { field } from 'shared/schema'
import { address, amount, datetime, number } from 'components/deposit/info.fields'
import { Info } from 'uikit/display/info'
import { Token } from 'uikit/crypto/token'
import { RedeemStatus } from 'entities/Redeem/constants'
import { Address } from 'uikit/crypto/address'

const Schema = [
    field('senderAddress', {
        label: 'Initiator',
        render: ({ value, object }) => <Address value={value} full useLink={`/initiators/${object.senderAddress}`} />,
    }),
    field('id', {
        label: 'Deposit contract',
        render: address,
    }),
    field('contractId', {
        label: 'TBTC contract',
        render: address,
    }),
    field('lotSize', {
        label: 'Lot size',
        render: amount,
    }),
    field('spentFee', {
        label: 'ETH spent',
        render: number,
    }),
    field('bitcoinWithdrawalAddress', {
        label: 'Bitcoin withdrawal address',
        render: address,
        payload: {
            color: 'brass',
        },
    }),
    field('bitcoinAddress', {
        label: 'Bitcoin recipient address',
        render: address,
        payload: {
            color: 'brass',
        },
    }),
    field('bitcoinFundedBlock', {
        label: 'Bitcoin funded block',
    }),
    field('tokenId', {
        label: 'Token ID',
        render: ({ value, object }) => <Token tokenId={value} contractId={object.depositTokenContract} />,
    }),
    field('createdAt', {
        label: 'Initiated',
        render: datetime,
    }),
    field('updatedAt', {
        label: 'Updated',
        render: datetime,
        hidden: (subject) => {
            return (
                subject.status === RedeemStatus.Redeemed ||
                subject.updatedAt === subject.completedAt ||
                subject.updatedAt === subject.createdAt
            )
        },
    }),
    field('completedAt', {
        label: 'Completed',
        render: datetime,
    }),
]


export const RedeemInfo = ({ redeem }) => <Info object={redeem} schema={Schema} />
