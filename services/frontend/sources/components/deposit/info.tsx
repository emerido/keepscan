import React from 'react'
import { address, amount, datetime } from 'components/deposit/info.fields'
import { field } from 'shared/schema'
import { Info } from 'uikit/display/info'

const Schema = [
    field('senderAddress', {
        label: 'Initiator',
        render: address,
    }),
    field('contractId', {
        label: 'tBTC contract',
        render: address,
    }),
    field('lotSize', {
        label: 'Lot size',
        render: amount,
    }),
    field('lotSizeFee', {
        label: 'Lot size fee',
        render: amount,
    }),
    field('lotSizeMinted', {
        label: 'Lot size minted',
        render: amount,
    }),
    field('bitcoinAddress', {
        label: 'Bitcoin deposit address',
        render: address,
        payload: {
            color: 'brass',
        },
    }),
    field('bitcoinFundedBlock', {
        label: 'Bitcoin funded block',
    }),
    field('createdAt', {
        label: 'Initiated',
        render: datetime,
    }),
    field('updatedAt', {
        label: 'Updated',
        render: datetime,
    }),
    field('completedAt', {
        label: 'Completed',
        render: datetime,
    }),
]

export const DepositInfo = ({ deposit }) => <Info object={deposit} schema={Schema} />
