import React, { ComponentProps, FC } from 'react'
import styles from './card.css'
import { List } from 'uikit/data/list'
import { useClasses } from 'shared/hooks/styles'
import { Heading } from 'uikit/typography'

type CardProps = ComponentProps<'div'> & {}

type CardHeadProps = ComponentProps<'div'> & {
    size?: 1 | 2 | 3 | 4 | 5
    stroked?: boolean
}
type CardHeadSuffixProps = ComponentProps<'div'> & {}

type CardBodyProps = ComponentProps<'div'> & {}

type CardListProps = ComponentProps<typeof List> & {}

type CardMoreProps = ComponentProps<'button'> & {}


export const Card: FC<CardProps> = ({ children, ...props }) => {
    const className = useClasses(styles, 'card', props)
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export const CardHead: FC<CardHeadProps> = ({ size, children, ...props }) => {
    const className = useClasses(styles, 'head', props)
    return (
        <div className={className} {...props}>
            <Heading size={size}>{children}</Heading>
        </div>
    )
}

CardHead.defaultProps = {
    size: 4,
    stroked: true,
}

export const CardBody: FC<CardBodyProps> = ({ children, ...props }) => {
    const className = useClasses(styles, 'body', props)
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export const CardList: FC<CardListProps> = ({ children, ...props }) => {
    return <List {...props}>{children}</List>
}

export const CardMore: FC<CardMoreProps> = ({children, ...props}) => {
    const className = useClasses(styles, 'more', props)
    return <button className={className} {...props}>{children}</button>
}

export const CardHeadSuffix: FC<CardHeadSuffixProps> = ({children, ...props}) => {
    const className = useClasses(styles, 'suffix', props)
    return <div className={className} {...props}>{children}</div>
}

export const CardFilter = ({children}) => {
    return (
        <div className={styles.filter}>{children}</div>
    )
}
