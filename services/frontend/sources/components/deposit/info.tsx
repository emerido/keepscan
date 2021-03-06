import React from 'react'
import { address, amount, datetime, datetimeDistance, number } from 'components/deposit/info.fields'
import { field } from 'shared/schema'
import { Info } from 'uikit/display/info'
import { Address } from 'uikit/crypto/address'
import { Token } from 'uikit/crypto/token'
import { DateTime, DateTimeDistance } from 'uikit/display/datetime'
import { Display } from 'uikit/typography/display'
import { DepositStatus } from 'entities/Deposit/constants'

const Schema = [
    field('senderAddress', {
        label: 'Initiator',
        render: ({ value, object }) => <Address value={value} full useLink={`/initiators/${object.senderAddress}`} />,
    }),
    field('id', {
        label: 'Deposit contract',
        render: address,
    }),
    // field('contractId', {
    //     label: 'Deposit Factory Contract',
    //     render: address,
    // }),
    field('lotSize', {
        label: 'Lot size',
        render: amount,
    }),
    field('lotSizeMinted', {
        label: 'TBTC received',
        render: number,
    }),
    field('lotSizeFee', {
        label: 'TBTC fee',
        render: number,
    }),
    field('spentFee', {
        label: 'ETH spent',
        render: number,
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
                subject.status === DepositStatus.Minted ||
                subject.updatedAt === subject.completedAt ||
                subject.updatedAt === subject.createdAt
            )
        },
    }),
    field('completedAt', {
        label: 'Completed',
        render: datetime,
    }),
    field('endOfTerm', {
        label: 'End of term',
        render: ({ value }) => (
            <>
                <DateTime inline value={value} />{' '}
                <Display secondary>
                    <DateTimeDistance inline value={value} withSuffix={false} /> left
                </Display>
            </>
        ),
        hidden: (subject) => {
            return subject.status === DepositStatus.Redeemed
        },
    }),
]

export const DepositInfo = ({ deposit }) => <Info object={deposit} schema={Schema} />
