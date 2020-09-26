import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getDeposits } from 'entities/Deposit/queries'
import { Card, CardHead, CardList } from 'uikit/layout/card'
import { Deposit } from 'entities/Deposit/types'
import { Address } from 'uikit/crypto/address'
import { ListItem } from 'uikit/data/list'
import { Flex } from 'uikit/layout/flex'
import { DateTimeDistance } from 'uikit/display/datetime'
import { View } from 'uikit/layout/view'
import { Display } from 'uikit/typography/display'

export const DepositCard = () => {
    const deposits = useSelector(getDeposits)

    const depositsList = useMemo(() => {
        return deposits.map((deposit) => <DepositRow key={deposit.id} deposit={deposit} />)
    }, [deposits])

    return (
        <Card>
            <CardHead>Deposits</CardHead>
            {/*<Flex grow={1}>*/}
            {/*    <View width='30%'>Tx</View>*/}
            {/*    <View width='30%'>Sender</View>*/}
            {/*    <View width='40%'>BTC</View>*/}
            {/*</Flex>*/}
            <CardList>{depositsList}</CardList>
        </Card>
    )
}

type DepositRowProps = {
    deposit: Deposit
}

const DepositRow: FC<DepositRowProps> = ({ deposit }) => {
    return (
        <ListItem interactive>
            <Flex justifyContent="space-between" alignItems="center">
                <div>
                    <Address value={deposit.id} />
                    <View paddingTop={10}>
                        <DateTimeDistance value={deposit.createdAt} secondary />
                    </View>
                </div>
                <View>
                    <Display>Sender:</Display>
                    <Address value={deposit.senderAddress} />
                </View>
                <Address value={deposit.bitcoinAddress} />
            </Flex>
        </ListItem>
    )
}
